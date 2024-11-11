const checkAuth = require("./utils/check-auth.js")
const { multer, storage } = require("./utils/multer.js");

const db = require("../database/db.js");
const Users = db.users;
const Posts = db.posts;

module.exports = (app, router) => {
    router.post(
    "/uploadpost",
    checkAuth,
    multer({ storage }).single("file"),
    (req, res) => {
      const img = req.body.img;
      const path = req.body.path;
      const uploaderName = req.body.uploaderName;
      const uploaderEmail = req.body.uploaderEmail;
      const uploaderDp = req.body.uploaderDp;
      const desc = req.body.desc;
      const time = req.body.time;
      const date = req.body.date;
      console.log("Req body img " + req.body.img);

      const Newpost = new Posts({
        uploaderName,
        uploaderEmail,
        uploaderDp,
        path,
        desc,
        time,
        date
      });
      Newpost.save((err, post) => {
        if (err) {
          console.log(err);
          res.send({ status: 0, msg: "Something went wrong" });
        } else {
          console.log(post);
          res.send({
            status: 1,
            msg: "Your post was successfully uploaded",
            post
          });
        }
      });
    }
  );

  app.post("/likePost", checkAuth, (req, res) => {
    const { email, _id, liked } = req.body;
    if (liked) {
      Posts.updateOne({ _id }, { $pull: { like: email } })
        .then((update) => {
          console.log(update);
          res.send({ status: 1 });
        })
        .catch((err) => {
          console.log(err);
          res.send({ status: 1 });
        });
    } else {
      Posts.updateOne({ _id }, { $addToSet: { like: email } })
        .then((update) => {
          console.log(update);
          res.send({ status: 1 });
        })
        .catch((err) => {
          console.log(err);
          res.send({ status: 0 });
        });
    }
  });

  app.post("/deletePost", checkAuth, (req, res) => {
    const { email, _id } = req.body;

    Posts.deleteOne({ _id, uploaderEmail: email })
      .then((deleted) => {
        console.log(deleted);
        res.send({ status: 1 });
      })
      .catch((err) => {
        console.log(err);
        res.send({ status: 0 });
      });
  });

  app.get("/getPost", checkAuth, (req, res) => {
    const email = req.userData.email;
    Users.findOne({ email })
      .then((user) => {
        const friends = user.friends;
        let friendsEmail = [];
        friends.map((f) => friendsEmail.push(f.email));

        Posts.find({
          $or: [
            { uploaderEmail: { $in: friendsEmail } },
            { uploaderEmail: email }
          ]
        })
          .then((post) => {
            let returnPost = JSON.parse(JSON.stringify(post));
            for (let i = 0; i < returnPost.length; i++) {
              returnPost[i].likeCount = returnPost[i].like.length;
              returnPost[i].liked = returnPost[i].like.includes(email)
                ? true
                : false;
            }
            console.log(returnPost);

            res.send({ status: 1, post: returnPost });
          })
          .catch((err) => res.send({ status: 0 }));
      })
      .catch((err) => res.send({ status: 0 }));
  });
};
