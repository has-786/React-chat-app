const express = require("express");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const app = express();


app.use(bodyParser.json());
app.use(cookieParser());

const cors = require("cors");
app.use(cors());
const { multer, storage } = require("./utils/multer.js");

const appMail = process.env.EMAIL_ID
const appMailPassword = process.env.EMAIL_PASSWORD
const secret = "access_token_secret";
const db = require("../database/db.js");
const Users = db.users;

module.exports = (app, router) => {
  app.post("/emailverify", (req, res) => {
    const email = req.body.email;
    console.log(email, appMail);
    var pat = email.substring(email.lastIndexOf("."));

    if (pat != ".com" && pat != ".co.in" && pat != ".in") {
      res.send({ status: 0, msg: "Email Id not correct" });
    } else {
      Users.findOne({ email: email }, (err, user1) => {
        if (err) res.send({ status: 0, msg: "Something went wrong!" });
        else if (user1)
          res.send({ status: 0, msg: "Email Already Registered!" });
        else {
          const otp = Math.floor(Math.random() * (9999 - 1000) + 1000);
          var transporter = nodemailer.createTransport({
            service: "Gmail",
            secure: false,
            auth: { user: appMail, pass: appMailPassword },
            tls: {
              rejectUnauthorized: false
            }
          });
          const mailOptions = {
            from: appMail,
            to: email,
            subject: "Socio We Email Verification OTP",
            text: "Your otp is " + otp
          };
          transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
              res.send({ status: 0, msg: "Something went wrong!" });
              console.log(err);
            } else {
              console.log(info);
              res.send({
                status: 1,
                msg: "An OTP is sent to this email id",
                otp: otp
              });
            }
          });
        }
      });
    }
  });

  app.post("/forgotPassword", (req, res) => {
    const email = req.body.email;
    console.log(email, appMail);
    const pat = email.substring(email.lastIndexOf("."));
    console.log(pat);
    if (pat != ".com" && pat != ".co.in" && pat != ".in") {
      res.send({ status: 0, msg: "Email Id not correct" });
    } else {
      Users.findOne({ email: email }, (err, user1) => {
        if (err) res.send({ status: 0, msg: "Something went wrong" });
        else if (!user1) res.send({ status: 0, msg: "User not registered" });
        else {
          const otp = Math.floor(Math.random() * (9999 - 1000) + 1000);
          const transporter = nodemailer.createTransport({
            service: "Gmail",
            secure: false,
            auth: { user: appMail, pass: appMailPassword },
            tls: {
              rejectUnauthorized: false
            }
          });
          const mailOptions = {
            from: appMail,
            to: email,
            subject: "Socio We OTP for forgot password",
            text: "Your otp is " + otp
          };
          transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
              res.send({ status: 0, msg: "Email Id not correct" });
              console.log(err);
            } else {
              console.log(info);
              res.send({
                status: 1,
                msg: "An OTP is sent to this email id",
                otp: otp
              });
            }
          });
        }
      });
    }
  });

  app.post("/changePassword", (req, res) => {
    const { email, password } = req.body;

    bcrypt.hash(password, 12, (err, hash) => {
      console.log(hash);

      Users.updateOne({ email }, { pass: hash })
        .then((update) => {
          if (!update) res.send({ status: 0 });
          else res.send({ status: 1 });
        })
        .catch((err) => {
          console.log(err);
          res.send({ status: 0 });
        });
    });
  });

  app.post("/localSignup", multer({ storage }).single("file"), (req, res) => {
    const { email, name, pass, auth } = req.body

    Users.findOne({ email }, (err, user1) => {
      if (err) console.log(err);
      else if (user1) {
        console.log("Already A User");
        console.log(user1);
        res.send({ msg: "Already Registered", status: 0 });
      } else {
        bcrypt.hash(pass, 12, (err, hash) => {
          console.log(hash);
          var Newuser = new Users({
            name,
            email,
            path,
            pass: hash,
            rooms: [],
            latest: [],
            pendings: [],
            friends: []
          });
          Newuser.save((err, user2) => {
            if (err) {
              console.log(err);
              res.send({ msg: "Someting Went Wrong", status: 0 });
            } else {
              console.log(user2);
              const token = jwt.sign(
                { _id: user2._id, email, name, path },
                secret,
                { expiresIn: "24h" }
              );

              console.log("token " + token);
              console.log("User registered: " + name);

              res.send({
                token: token,
                name: user2.name,
                email: user2.email,
                path,
                msg: "Successfully Registered",
                status: 1
              });
            }
          });
        });
      }
    });
  });

  app.post("/localSignin", (req, res, next) => {
    const email = req.body.email;
    const pass = req.body.pass;
    console.log(email, pass);

    Users.findOne({ email })
      .then(function (user1) {
        console.log('user1', user1)
        console.log(user1.pass);
        if (user1) return bcrypt.compare(pass, user1.pass);
      })
      .then(function (samePassword) {
        console.log(samePassword);
        if (samePassword == true) {
          Users.findOne({ email: email }, (err, user2) => {
            console.log(user2);
            const token = jwt.sign(
              {
                _id: user2._id,
                email: email,
                name: user2.name,
                path: user2.path
              },
              "access_token_secret",
              { expiresIn: "24h" }
            );
            console.log("token " + token);

            res.send({
              token,
              name: user2.name,
              email: user2.email,
              path: user2.path,
              msg: "Logged in successfully",
              status: 1
            });
          });
        } else res.send({ name: "Wrong Credentials", status: 0 });
      })
      .catch(function (error) {
        console.log("Error authenticating user: ");
        res.send({ name: "Something Went Wrong", status: 0 });
        console.log(error);
        next();
      });
  });
};
