// load npm packages
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
require('dotenv').config();

// load files
const { week } = require('./time-config.js');

// configuration
const sessionConfig = {
name: "crypticv_connect.sid",
secret: process.env.SESSION_SECRET,
store: new MongoStore({ mongooseConnection: mongoose.connection, ttl: 2 * week  }),
resave: false,
saveUninitialized: false,
cookie: { httpOnly: true, maxAge: 2 * week }
};

// export
module.exports = { sessionConfig };
