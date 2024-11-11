module.exports = (app, router) => {
    require('./auth.js')(app, router)
    require('./chats.js')(app, router)
    require('./comments.js')(app, router)
    require('./friends.js')(app, router)
    require('./posts.js')(app, router)
    require('./rooms.js')(app, router)
    require('./users.js')(app, router)
}