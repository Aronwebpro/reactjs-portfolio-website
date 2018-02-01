const passport = require('passport');
const flash = require('connect-flash');


exports.validateLogin = (req, res, next) => {
  req.checkBody('email', 'You must supply a Username! ').notEmpty();
  req.checkBody('password', 'Password Cannot be Blank!').notEmpty();
  const errors = req.validationErrors();
  if (errors) {
        const error = errors.map((e) => {
          return e.msg;
        });
       res.set('error', '400').send({success:false, error:error });
    return; // stop the fn from running
  }
  next(); // there were no errors!
};

exports.login = passport.authenticate('local', {});

exports.loginRespond = (req, res) => {
  res.send({ success:true, message:'You are now logged out! 👋'});
}

//failureFlash: 'Failed Login!',
//successFlash: 'You are now logged in!'


exports.logout = (req, res) => {
  req.logout();
  //req.flash('success', 'You are now logged out! 👋');
  res.redirect('/');
};

exports.isLoggedIn = (req, res, next) => {
  // first check if the user is authenticated
  if (req.isAuthenticated()) {
    next(); // carry on! They are logged in!
    return;
  }
  //req.flash('error', 'Oops you must be logged in to do that!');
  res.redirect(req.originalUrl);
};