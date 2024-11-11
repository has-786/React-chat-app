const checkAuth = require("./utils/check-auth.js")

const db = require("../database/db.js");
const Posts = db.posts;

module.exports = (app, router) => {
    router.post("/addComment", checkAuth, (req, res) => {
    const { _id, type, comment, index } = req.body;
    console.log(req.body);
    if (type === "comment") {
      Posts.updateOne(
        { _id },
        { $push: { comment: { $each: [comment], $position: 0 } } }
      )
        .then((update) => {
          if (update) res.send({ status: 1 });
          else res.send({ status: 0 });
        })
        .catch((err) => res.send({ status: 0 }));
    } else {
      const commentData = [];
      Posts.findOne({ _id })
        .then((post) => {
          let commentData = post.comment;
          let reply = commentData[index].reply;
          reply = [comment, ...reply];
          Posts.updateOne({ _id }, { $set: { comment: commentData } })
            .then((update) => {
              if (update) res.send({ status: 1 });
              else res.send({ status: 0 });
            })
            .catch((err) => res.send({ status: 0 }));
        })
        .catch((err) => res.send({ status: 0 }));
    }
  });

  router.post("/deleteComment", checkAuth, (req, res) => {
    const { _id, type, index1, index } = req.body;
    if (type === "comment") {
      Posts.findOne({ _id })
        .then((post) => {
          let comment = post.comment;
          comment.splice(index1, 1);
          Posts.updateOne({ _id }, { comment }).then((update) => {
            if (!update) res.send({ status: 0 });
            else res.send({ status: 1 });
          });
        })
        .catch((err) => res.send({ status: 0 }));
    } else {
      Posts.findOne({ _id })
        .then((post) => {
          let comment = post.comment;
          comment[index].reply.splice(index1, 1);
          Posts.updateOne({ _id }, { comment }).then((update) => {
            if (!update) res.send({ status: 0 });
            else res.send({ status: 1 });
          });
        })
        .catch((err) => res.send({ status: 0 }));
    }
  });

  router.post("/editComment", checkAuth, (req, res) => {
    const { _id, type, index1, index, commentData } = req.body;
    console.log(req.body);
    if (type === "comment") {
      Posts.findOne({ _id })
        .then((post) => {
          let comment = post.comment;
          comment[index1] = commentData;

          Posts.updateOne({ _id }, { comment }).then((update) => {
            if (!update) res.send({ status: 0 });
            else res.send({ status: 1 });
          });
        })
        .catch((err) => res.send({ status: 0 }));
    } else {
      Posts.findOne({ _id })
        .then((post) => {
          let comment = post.comment;
          comment[index].reply[index1] = commentData;

          Posts.updateOne({ _id }, { comment }).then((update) => {
            if (!update) res.send({ status: 0 });
            else res.send({ status: 1 });
          });
        })
        .catch((err) => res.send({ status: 0 }));
    }
  });
};
