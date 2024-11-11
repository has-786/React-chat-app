const express = require("express");
const checkAuth = require("./utils/check-auth.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

const cors = require("cors");
app.use(cors());
const { multer, storage } = require("./utils/multer.js");

const db = require("../database/db.js");
const Users = db.users;
const Rooms = db.rooms;

module.exports = (app, router) => {
  router.get("/getChat", checkAuth, (req, res) => {
    const email = req.userData.email;

    Users.findOne({ email })
      .then((chats) => {
        console.log(chats);
        res.send({ chats: chats.recentChat, status: 1 });
      })
      .catch((err) => res.send({ status: 0 }));
  });

  router.post("/getMessages", checkAuth, (req, res) => {
    const room = req.body.room;
    const page = req.body.page;
    const size = 10;

    const firstIndex = (page - 1) * size;
    lastIndex = page * size;
    console.log(room);
    Rooms.findOne(
      { name: room },
      { msgs: { $slice: [firstIndex, lastIndex - firstIndex + 1] } }
    )
      .then((room) => {
        console.log(room);
        if (!room) res.send({ msgs: null, status: 0 });
        else {
          let end = 0;
          let msgs = room.msgs;
          if (msgs.length <= size) end = 1;
          else msgs.pop();

          res.send({ msgs: msgs.reverse(), status: 1, end });
        }
      })
      .catch((err) => {
        console.log(err);
        res.send({ msgs: null, status: 0 });
      });
  });

  router.post(
    "/sendFile",
    checkAuth,
    multer({ storage }).single("file"),
    (req, res) => {
      res.send({ status: 1 });
    }
  );
};
