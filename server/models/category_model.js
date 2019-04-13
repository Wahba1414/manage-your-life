'use strict';


var Schema = require('mongoose').Schema;
var BaseSchema = require(__dirname + '/models_plugins');


module.exports = function (connection,options) {
  var schema = new Schema({
    name: String,
    description: String,
    color: String,
    number: Number,
  });

  //Add the needed plugins here.

  return connection.model('Category', schema);
};
