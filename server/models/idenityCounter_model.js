'use strict';


var Schema = require('mongoose').Schema;
var BaseSchema = require(__dirname + '/models_plugins');


module.exports = function (connection,options) {
  var schema = new Schema({
    category: Number
  });

  //Add the needed plugins here.

  return connection.model('idenitycounter', schema);
};
