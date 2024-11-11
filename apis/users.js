const checkAuth = require("./utils/check-auth.js");
const jwt = require("jsonwebtoken");
const path = require('path')
const { multer, storage } = require("./utils/multer.js");

const db = require("../database/db.js");
const Users = db.users;
const Posts = db.posts;

module.exports = (app, router) => {
  app.get("/uploads/:img/:token", (req, res) => {
    try {
      console.log(req.params.img)
      const token = req.params.token;
      jwt.verify(token, "access_token_secret");
    } catch (error) {
      return res.status(401).json({
        msg: "You are not authorized!!!"
      });
    }
    res.download(path.join(__dirname,"../uploads", req.params.img));
  });

  router.get("/getUser", checkAuth, (req, res) => {
    console.log(req.userData);
    res.send({
      name: req.userData.name,
      email: req.userData.email,
      path: req.userData.path
    });
  });

  router.post(
    "/updateDp",
    checkAuth,
    multer({ storage }).single("file"),
    (req, res) => {
      console.log(req.body.path);
      console.log(req.userData);
      const { path } = req.body;
      const { _id, name, email } = req.userData;
      Users.updateOne({ email }, { path })
        .then((update) => {
          const token = jwt.sign(
            { _id, email, name, path },
            "access_token_secret",
            { expiresIn: "24h" }
          );
          res.send({ status: 1, token });

          Posts.updateMany({ uploaderEmail: email }, { uploaderDp: path })
            .then((update) => {
              if (update) console.log("Posts updated with new dp");
            })
            .catch((err) => console.log(err));

          Posts.find({})
            .then((post) => {
              for (let i = 0; i < post.length; i++) {
                let c = post[i].comment;
                for (let j = 0; j < c.length; j++) {
                  if (c[j].email === email) {
                    c[j].path = path;
                  }
                  let r = c[j].reply;
                  for (let k = 0; k < r.length; k++) {
                    if (r[k].email === email) {
                      r[k].path = path;
                    }
                  }
                }
                Posts.updateOne({ _id: post[i]._id }, { comment: c })
                  .then((update) => {})
                  .catch((err) => console.log(err));
              }
            })
            .catch((err) => console.log(err));

          Users.updateMany(
            {
              email: { $ne: email },
              recentChat: { $elemMatch: { room: { $regex: `.*${email}.*` } } }
            },
            { $set: { "recentChat.$.dp": path } }
          )
            .then((update) => {
              if (update) console.log("Recentchats updated with new dp");
            })
            .catch((err) => console.log(err));

          Users.updateMany(
            { pendings: { $elemMatch: { email } } },
            { $set: { "pendings.$.path": path } }
          )
            .then((update) => {
              if (update) console.log("Pendings updated with new dp");
            })
            .catch((err) => console.log(err));

          Users.updateMany(
            { sent: { $elemMatch: { email } } },
            { $set: { "sent.$.path": path } }
          )
            .then((update) => {
              if (update) console.log("Sents updated with new dp");
            })
            .catch((err) => console.log(err));

          Users.updateMany(
            { friends: { $elemMatch: { email } } },
            { $set: { "friends.$.path": path } }
          )
            .then((update) => {
              if (update) console.log("Friends updated with new dp");
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => res.send({ status: 0 }));
    }
  );
};
