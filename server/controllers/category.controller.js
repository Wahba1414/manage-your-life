'use strict';

// requring services.
var categoryService = require('../services/models_CRUD/category.service');

var controller = {};

// Create new category.
controller.createCategory = function(req,res){
    console.log("Inside controller.createCategory function");

    // preparing data.
    var categoryData = req.body;
    
    // calling service.
    categoryService.createCategory(categoryData).then(function(result){
        res.send(result);
    },function(error){
        res.status(500);
        res.send(error);
    });
}

// Create read categories.
controller.getCategories = function(req,res){
    console.log("Inside controller.getCategories function");

    // preparing data.
    var queryData = req.body;
    // Calling service.
    categoryService.getCategories(queryData).then(function(result){
        res.send(result);
    },function(error){
        res.status(500);
        res.send(error);
    });
}


module.exports = controller;