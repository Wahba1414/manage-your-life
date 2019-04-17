'use strict';


var Schema = require('mongoose').Schema;
var BaseSchema = require(__dirname + '/models_plugins');

// plugins.
var AutoIncrement = require('../db_plugins/auto_increment');

module.exports = function (connection,options) {
  var schema = new Schema({
    name: String,
    description: String,
    color: String,
    number: Number,
  });

  //Add the needed plugins here.
  schema.plugin(AutoIncrement,'category');

  // Adding the needed indexes. (but the best practice to do it using mongodb commands)
  // schema.indexes({name:1});


  return connection.model('Category', schema);
};
