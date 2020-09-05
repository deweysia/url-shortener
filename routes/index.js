const express = require('express');
const router = express.Router();
const usersRoutes = require('./users.routes.');
const urlRoutes = require('./url.routes');
// router.use('/users', usersRoutes);

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.send('index page');
// });


module.exports = app => {
  usersRoutes(app);
  urlRoutes(app);

  router.get("/", function (req, res, next) {
    res.send('base route');
  });

  app.use('/', router);
};
