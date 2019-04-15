const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const promisify = require('es6-promisify');
const expressValidator = require('express-validator');
const flash = require('connect-flash');

//Load environmental variables from var file
require('dotenv').config({ path: 'vars.env' });

//DB connection
mongoose.connect('mongodb://react-tutorial-name:reacttutorial@ds135444.mlab.com:35444/react-tutorial');
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`Byrka Happen with MongoDB → ${err.message}`);
});

//Models
const User = require('./Model/User');

//Passport
const passport = require('passport');
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//App
const app = express();
const router = express.Router();
const port = process.env.API_PORT || 8080;


//JSON Data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
app.use(expressValidator());

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// Sessions allow us to store data on visitors from request to request
// This keeps users logged in and allows us to send flash messages
app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));


// Passport JS is what we use to handle our logins
app.use(passport.initialize());
app.use(passport.session());

//**


// serve up "build" dir as static files 
app.use('/', express.static(path.join(__dirname, 'build')));

//Include Controllers
const userController = require('./Controller/userController.js'); 
const authController = require('./Controller/authController.js');

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

 res.setHeader('Cache-Control', 'no-cache');
 next();
});

/*
Routes ***************************************************************************************
*/
app.use('/', router);
router.post('/register', userController.validateRegister, userController.register); 
router.post('/login', authController.validateLogin, authController.login, authController.loginRespond);
router.post('/islogin', authController.isLoggedIn );


//Redirect if no match
router.all('*', (req, res, next) => {
	res.sendFile(path.join(__dirname, '/build/index.html'));
});

/*
***************************************************************************************
*/

app.listen(port, () => {
	console.log('App Running on port ' + port);
});


