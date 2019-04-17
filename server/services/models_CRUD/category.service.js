'use strict';

var Q = require('q');

//get the db connections.
var dbs = require('../../models');

var service = {};

// Create new category.
service.createCategory = function(categoryData){
    console.log("Inside service.createCategory function");
    return Q.promise(function (resolve, reject) {
        //Preparing new category object.
        var newCategory = {
            name: categoryData.name,
            description: categoryData.description,
            color: categoryData.color,
            number:0
        }
        // validating data and generating new _id.
        var newCategoryModel = new dbs.mean_template.connection.Category(newCategory);
        
        // Saving..
        newCategoryModel.save().then(function(){
            resolve({success: true});
        },function(err){
            console.log("error happened inside service.createCategory function: " , err);
            reject({success:false , msg:"error happened during adding new category"});
        })
    });
}

// Create read categories.
service.getCategories = function(queryData){
    console.log("Inside service.getCategories function");
    
    return Q.promise(function (resolve, reject) {
        // preparing query object.
        var query = {
        };

        // Fetching ..
        dbs.mean_template.connection.Category.find(query).sort({number: 1}).lean().exec().then(function(categories){
            resolve({
                success: true,
                categories: categories
            })
        },function(err){
            console.log("error happened inside service.getCategories function: " , err);
            reject({success:false , msg:"error happened during fetching all categories"});
        });
    });
}

//Update category.

// Remove categories.
// Depend on number field for simplicity.
service.removeCategoriesByIDs = function(queryData){
    console.log("Inside service.removeCategoriesByIDs function");
    
    return Q.promise(function (resolve, reject) {
        // preparing query object.
        
        // Fetching ..
        dbs.mean_template.connection.Category.deleteMany({number:{$in:queryData}}).then(function(){
            resolve({
                success: true
            })
        },function(err){
            console.log("error happened inside service.removeCategoriesByIDs function: " , err);
            reject({success:false , msg:"error happened during fetching all categories"});
        });
    });
}

module.exports = service;