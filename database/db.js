const mongoose = require("mongoose");

function con(mongoose) {
  const mongoUrl = process.env.MONGODB_URI
  //"mongodb://localhost:27017/example";
  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.info("Database is connected");
  });
}

const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  path: String,
  pass: String,
  rooms: Array,
  latest: Array,
  pendings: Array,
  friends: Array,
  sent: Array,
  recentChat: Array
});
const users = mongoose.model("users", usersSchema);
console.log('users', users.find({}).then(u => console.log('u', u)).catch(err => console.log(err)))

const roomsSchema = new mongoose.Schema({
  name: String,
  pass: String,
  online: Array,
  msgs: Array
});
const rooms = mongoose.model("rooms", roomsSchema);

const postsSchema = new mongoose.Schema({
  uploaderName: String,
  uploaderEmail: String,
  uploaderDp: String,
  path: String,
  time: Number,
  date: String,
  desc: String,
  like: Array,
  share: Array,
  comment: Array
});
const posts = mongoose.model("posts", postsSchema);

const chatsSchema = new mongoose.Schema({ email: String, chats: Array });
const chats = mongoose.model("chats", chatsSchema);

const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  clickCount: Number
});
const urls = mongoose.model("urls", urlSchema);

module.exports = { con, users, rooms, posts, chats, urls };
