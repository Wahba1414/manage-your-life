'use strict';

var Q = require('q');

//get the db connections.
var dbs = require('../../models');

var service = {};

// Get the db connection.
service.getDBConnection = function(){
    console.log('Inside service.getDBConnection function');
    return dbs.mean_template.connection;
}

module.exports = service;