'use strict';
var express = require('express')
var router = express.Router();

//requiring the needed controllers and modules.

var controller = require("../../controllers/category.controller");

module.exports = function (app) {
  app.use('/category', router);
};

//adding the needed routes.

router.post('/createCategory', controller.createCategory);

router.get('/getCategories', controller.getCategories);


