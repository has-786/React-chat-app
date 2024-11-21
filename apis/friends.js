const checkAuth = require("./utils/check-auth.js");
const { generate } = require('./utils/helpers.js')
const db = require("../database/db.js");
const Users = db.users;
const Rooms = db.rooms;

module.exports = (app, router) => {
    router.get("/getFriend", checkAuth, (req, res) => {
    Users.findOne({ email: req.userData?.email })
      .then((user) => {
        res.send({
          name: req.userData.name,
          email: req.userData.email,
          path: req.userData.path,
          friends: user.friends,
          pendings: user.pendings,
          sent: user.sent,
          status: 1
        });
      })
      .catch((err) => {
        res.send({ status: 0 });
      });
  });

  router.post("/setFriend", checkAuth, (req, res) => {
    const { name, email, path } = req.userData;
    const profile = req.body.profile;
    const profile2 = { name, email, path };

    const option = req.body.option;
    console.log(profile);

    if (option === "Accept") {
      Users.updateOne(
        { email: req.userData.email },
        {
          $pull: { pendings: { email: profile.email } },
          $push: { friends: profile }
        }
      )
        .then((update) => {
          console.log(update);
        })
        .catch((err) => {
          res.send({ status: 0 });
        });

      Users.updateOne(
        { email: profile.email },
        { $pull: { sent: { email } }, $push: { friends: profile2 } }
      )
        .then((update) => {
          console.log(update);
        })
        .catch((err) => {});

      console.log("Email " + email + " Profile " + profile.email);
      const roomName = generate(email, profile.email);

      Rooms.findOne({ name: roomName }).then((room) => {
        if (room) {
          console.log(roomName + " already");
          res.send({ status: 1 });
        } else {
          const Newroom = new Rooms({ name: roomName, online: [], msgs: [] });
          Newroom.save((err, room) => {
            if (err) {
              console.log(err);
              res.send({ msg: "Someting Went Wrong", status: 0 });
            } else if (room) {
              console.log(roomName + " created");
              res.send({ msg: "Successfully created", status: 1 });
            } else {
              console.log("Error");
              res.send({ msg: "Someting Went Wrong", status: 1 });
            }
          });
        }
      });
    } else if (option === "Disconnect" || option === "Cancel request") {
      Users.updateOne({ email: req.userData.email }, { $pull: { friends: { email: profile.email } } })
        .then((update) => {
          console.log(update);
        })
        .catch((err) => {});

      Users.updateOne({ email: req.userData.email }, { $pull: { sent: { email: profile.email } } })
        .then((update) => {
          console.log(update);
        })
        .catch((err) => {});

      Users.updateOne(
        { email: req.userData.email },
        { $pull: { pendings: { email: profile.email } } }
      )
        .then((update) => {
          console.log(update);
        })
        .catch((err) => {});

      Users.updateOne(
        { email: profile.email },
        { $pull: { friends: { email: email } } }
      )
        .then((update) => {
          console.log(update);
          res.send({ status: 1 });
        })
        .catch((err) => {
          res.send({ status: 0 });
        });
      Users.updateOne({ email: profile.email }, { $pull: { sent: { email } } })
        .then((update) => {
          console.log(update);
        })
        .catch((err) => {});

      Users.updateOne(
        { email: profile.email },
        { $pull: { pendings: { email } } }
      )
        .then((update) => {
          console.log(update);
        })
        .catch((err) => {});
    } else {
      Users.updateOne({ email: req.userData.email }, { $push: { sent: profile } })
        .then((update) => {
          console.log(update);
        })
        .catch((err) => {});

      Users.updateOne(
        { email: profile.email },
        { $push: { pendings: profile2 } }
      )
        .then((update) => {
          console.log(update);
          res.send({ status: 1 });
        })
        .catch((err) => {
          res.send({ status: 0 });
        });
    }
  });

  router.post("/getProfile", checkAuth, (req, res) => {
    Users.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) res.send({ status: 0 });
        else
          res.send({
            name: user.name,
            email: user.email,
            path: user.path,
            status: 1
          });
      })
      .catch((err) => res.send({ status: 0 }));
  });

  router.post("/searchPeople", checkAuth, (req, res) => {
    const searchstring = req.body.searchstring;
    if (searchstring === "") res.send({ users: [], status: 1 });
    else {
      Users.find({
        $or: [
          {
            email: {
              $regex: `.*${searchstring.toLowerCase()}.*`,
              $options: "i"
            }
          },
          {
            name: { $regex: `.*${searchstring.toLowerCase()}.*`, $options: "i" }
          }
        ]
      })
        .then((users) => {
          console.log(users);
          res.send({ users, status: 1 });
        })
        .catch((err) => res.send({ status: 0 }));
    }
  });
};
