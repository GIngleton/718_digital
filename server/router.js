const Authentication = require('./controllers/authentication');
const UserController = require('./controllers/users_controller');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({
      message:
        'An email has been sent to the address you provided. Please check your email and click the link within to continue signing up.'
    });
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
  app.put('/signupdetails', Authentication.signupDetails);
  app.post('/addright', Authentication.addRight);
  app.post('/addSchool', Authentication.addSchool);
  app.post('/addViolation', Authentication.addViolation);
  app.post('/addFlag', Authentication.addFlag);
  app.get('/user', UserController.greeting); // user profile page
  app.get('/school');
  app.get('/rights');
  app.put('/confirmEmail', UserController.confirmEmail);
  app.post('/newadmin', Authentication.signup);
};
