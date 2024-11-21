const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require('dotenv').config()

const port = process.env.PORT || 5001;
const router = express.Router();
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, { transports: ["websocket", "polling"] });

app.use(bodyParser.json());
app.use(cookieParser());

const cors = require("cors");
app.use(cors());

require('./apis/index.js')(app, router)
require('./socketMsgs/index.js')(io)
const db = require("./database/db.js");
db.con(mongoose);

app.use("/", router);
app.use("/chat", router);
app.use("/chats", router);
app.use("/friends", router);
app.use("/groups", router);
app.use("/chat/:room", router);
app.use("/personal/:room/", router);
app.use("/personal/:room/:emails", router);
app.use("/profile", router);
app.use("/profile/:profile", router);
app.use("/enterroom", router);
app.use("/newroom", router);

// rendering front-end
const routes = [
	"/",
	"/signin",
	"/signup",
	"/newroom",
	"/enterroom",
	"/chats",
	"/groups",
	"/chat/:room",
	"/friends",
	"/profile/:profile",
	"/personal/:room/:emails"
]

routes.map(route =>
	app.use(route, express.static(path.join(__dirname, "client", "build")))
);
routes.map(route =>
	app.get(route, (req, res) => {
		res.sendFile(path.join(__dirname, "client", "build", "index.html"));
	})
);
// if(!http.listening) http.listen(port, () => {
// 	console.log(`Server running on port ${port}`);
// });

http.listen(port, () => {
		console.log(`Server running on port ${port}`);
	});

// app.listen(port, () => {
// 	console.log(`Server running on port ${port}`);
// });

module.exports = app