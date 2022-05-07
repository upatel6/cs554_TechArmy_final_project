// load npm packages
const session = require('express-session');
const FirestoreStore = require('connect-session-firestore')(session);
//const firebase = require('firebase-admin');
const firebaseConfig = {
    apiKey: "AIzaSyBUnk7k_hWjiCfr59mOxoxHoh9y_QkePt8",
    authDomain: "techarmy-70453.firebaseapp.com",
    projectId: "techarmy-70453",
    storageBucket: "techarmy-70453.appspot.com",
    messagingSenderId: "363668472493",
    appId: "1:363668472493:web:3c8672790df54d76f7fc24",
    measurementId: "G-0B293W3B9G",
    databaseURL: 'https://cryptic_ventures.firebaseio.com',
    //credential: firebase.credential.cert('path/to/serviceAccountCredentials.json'),

};

const app = initializeApp(firebaseConfig);

// load files
const { week } = require('./time_config');

// configuration
const sessionConfig = {
name: "TechArmy.sid",
secret: process.env.SESSION_SECRET,
store: new FirestoreStore({
    database: app.firestore()
  }),
resave: false,
saveUninitialized: false,
cookie: { httpOnly: true, maxAge: 2 * week }
};

// export
module.exports = { sessionConfig };
