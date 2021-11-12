var express = require('express');
var router = express.Router();
var UserModel = require("../models/Users");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




router.get('/login', function(req, res, next) {
  var userRow = new UserModel({
    firstname: req.query.email,
    lastname: req.query.email,
    email: req.query.email,
    password: req.query.password
  });
  userRow.save();
});


module.exports = router;


