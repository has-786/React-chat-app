const express = require("express");
const checkAuth = require("./utils/check-auth.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");

const router = express.Router();
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

const cors = require("cors");
app.use(cors());

const db = require("../database/db.js");
const Users = db.users;
const Rooms = db.rooms;

let room;

module.exports = (app, router) => {
  app.post("/newroom", checkAuth, (req, res) => {
    const name = req.body.name;
    const pass = req.body.pass;

    Rooms.findOne({ name }, (err, room) => {
      if (err) console.log(err);
      else if (room) {
        console.log("Already A Room");
        console.log(room);
        res.send({ msg: "Already Existing", status: 0 });
      } else {
        bcrypt.hash(pass, 12, (err, hash) => {
          //const token
          console.log(hash);
          var Newroom = new Rooms({ name, pass: hash, online: [], msgs: [] });
          Newroom.save((err, room) => {
            if (err) {
              console.log(err);
              res.send({ msg: "Someting Went Wrong", status: 0 });
            } else {
              console.log(room);

              console.log("Room created: " + name);
              Users.updateOne(
                { _id: req.userData._id },
                { $push: { rooms: name, latest: name } }
              )
                .then((update) => console.log("User room array updated"))
                .catch((err) => console.log(err));

              res.send({ msg: "Successfully created", status: 1 });
            }
          });
        });
      }
    });
  });

  app.post("/enterroom", checkAuth, (req, res, next) => {
    const name = req.body.name;
    const pass = req.body.pass;
    Rooms.find({}, (err, room) => console.log(room));
    console.log(req.body);
    Rooms.findOne({ name })
      .then(function (room) {
        console.log(room);
        if (room) return bcrypt.compare(pass, room.pass);
        else throw Error;
      })
      .then(function (samePassword) {
        console.log(samePassword);
        if (samePassword) {
          console.log(room);
          Users.updateOne(
            { _id: req.userData._id, latest: { $ne: name } },
            { $push: { latest: { $each: [name], $sort: -1 } } }
          )
            .then((update) => console.log("User room array updated"))
            .catch((err) => console.log(err));

          res.send({ status: 1 });
        } else res.send({ name: "Wrong password", status: 0 });
      })
      .catch(function (error) {
        console.log("Wrong room details");
        res.send({ msg: "Wrong room details", status: 0 });
        console.log(error);
        next();
      });
  });

  router.get("/getRooms", checkAuth, (req, res) => {
    const _id = req.userData._id;
    const name = req.userData.name;
    const email = req.userData.email;
    const path = req.userData.path;

    Users.findOne({ _id })
      .then((user) => {
        console.log(user);
        res.send({
          rooms: user.rooms,
          latest: user.latest,
          status: 1,
          email,
          name,
          path
        });
      })
      .catch((err) => {
        console.log(err);
        res.send({ status: 0 });
      });
  });

  app.post("/editRoom", checkAuth, (req, res) => {
    const room = req.body.room;
    const _id = req.userData._id;
    const newPassword = req.body.newPassword;

    bcrypt.hash(newPassword, 12, (err, hash) => {
      console.log(hash);

      Rooms.updateOne({ name: room }, { pass: hash })
        .then((update) => {
          if (!update) res.send({ status: 0 });
          else {
            console.log(update);
            Users.update({ latest: room }, { $pull: { latest: room } })
              .then((update) => {
                console.log(update);
                if (!update) res.send({ status: 0 });
                else res.send({ status: 1 });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  app.post("/exitRoom", checkAuth, (req, res) => {
    const room = req.body.room;
    const _id = req.userData._id;
    Users.updateOne({ _id }, { $pull: { latest: room } })
      .then((update) => {
        if (!update) res.send({ status: 0 });
        else {
          console.log(update);
          res.send({ status: 1 });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.post("/deleteRoom", checkAuth, (req, res) => {
    const room = req.body.room;
    Rooms.findOneAndDelete({ name: room })
      .then((deleted) => {
        console.log(deleted);
        if (!deleted) res.send({ status: 0 });
        else {
          console.log("Deleted " + deleted);
          Users.updateMany(
            { $or: [{ latest: room }, { rooms: room }] },
            { $pull: { latest: room, rooms: room } }
          )
            .then((update) => {
              console.log(update);
            })
            .catch((err) => {
              console.log(err);
            });
          res.send({ status: 1 });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
