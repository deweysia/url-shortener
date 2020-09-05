const router = require("express").Router();

module.exports = app => {

  // Create a new User
  router.get("/", function (req, res, next) {
    res.send('users page');
  });

  app.use('/users', router);
};