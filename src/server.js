const express = require('express');
const pageRoutes = require('./routes');
const apiRoutes = require('./api/routes');
const path = require('path');
const session = require ("express-session")
const fileUpload = require("express-fileupload")

const server = express();

//setting
server.set('port', 4500);
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

//middleware
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(session({
    name: "books-app",
    secret: "loquesea",
    resave: false,
    saveUninitialized: false
}))
server.use(fileUpload())

//routes
server.use('/pages', pageRoutes.pages);
server.use('/api/user', apiRoutes.user);
server.use('/api/book', apiRoutes.book);

//static folder
server.use(express.static(path.join(__dirname, 'public')));

module.exports = server;
