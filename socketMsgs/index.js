const db = require("../database/db.js");
const Users = db.users;
const Rooms = db.rooms;
const express = require('express')
const app = express();

module.exports = (io) => {
  io.sockets.on("connection", (socket) => {
    socket.on("create", function (myroom) {
      console.log(myroom);
      socket.join(myroom);
    });

    // When new user joins
    socket.on("user-joined", (name, room) => {
      console.log(`user joined: ${name} on room ${room}`);
      socket.to(room).emit("user-joined", name);
    });

    // When user sends a message
    socket.on("send", async (message) => {
      console.log(message);
      const { email, room, roomName, link, dp } = message;
      let link2, roomName2, path2, emails;
      if (room != roomName) {
        let linkhead = link.slice(0, link.lastIndexOf("/"));
        emails = link.slice(link.lastIndexOf("/") + 1, link.length);
        emails = emails.split("-");
        console.log(emails);

        link2 = linkhead + "/" + emails[1] + "-" + emails[0];

        await Users.findOne({ email: emails[1] })
          .then((user) => {
            roomName2 = user.name;
            dp2 = user.path;
          })
          .catch((err) => console.log(err));

        console.log(link2 + " " + roomName2 + " " + dp2);
      }

      socket.to(message.room).emit("receive", {
        room: message.room,
        flag: message.flag,
        email: message.email,
        message: message.msg,
        path: message.path,
        salt: message.salt,
        iv: message.iv,
        name: message.name,
        time: message.time
      });

      Rooms.updateOne(
        { name: message.room },
        {
          $push: {
            msgs: {
              $each: [
                {
                  flag: message.flag,
                  email: message.email,
                  message: message.msg,
                  salt: message.salt,
                  iv: message.iv,
                  path: message.path,
                  name: message.name,
                  time: message.time
                }
              ],
              $position: 0
            }
          }
        }
      )
        .then((update) => {
          console.log(`Room ${message.room} message updated successfully`);

          if (room === roomName) {
            Users.updateMany(
              { latest: { $in: room } },
              { $pull: { recentChat: { room } } }
            )
              .then((update) => {
                console.log(update + " Chat updated");
                Users.updateMany(
                  { latest: { $in: room } },
                  {
                    $push: {
                      recentChat: {
                        $each: [{ room, roomName, link, dp }],
                        $position: 0
                      }
                    }
                  }
                )
                  .then((update) => {
                    console.log(update + " Chat updated");
                  })
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
          } else {
            Users.updateMany({ email }, { $pull: { recentChat: { room } } })
              .then((update) => {
                console.log(update + " Chat updated");
                Users.updateMany(
                  { email },
                  {
                    $push: {
                      recentChat: {
                        $each: [{ room, roomName, link, dp }],
                        $position: 0
                      }
                    }
                  }
                )
                  .then((update) => {
                    console.log(update + " Chat updated");
                  })
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));

            Users.updateMany(
              { email: emails[0] },
              { $pull: { recentChat: { room } } }
            )
              .then((update) => {
                console.log(update + " Chat updated");
                Users.updateMany(
                  { email: emails[0] },
                  {
                    $push: {
                      recentChat: {
                        $each: [
                          { room, roomName: roomName2, link: link2, dp: dp2 }
                        ],
                        $position: 0
                      }
                    }
                  }
                )
                  .then((update) => {
                    console.log(update + " Chat updated");
                  })
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    });

    // on disconnect
    socket.on("disconnect", (reason) => {
      socket.disconnect(true);
      console.log(reason);
    });
  });
};