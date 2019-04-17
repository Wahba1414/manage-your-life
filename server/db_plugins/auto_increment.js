//get the db connections.
var dbConnection = require('../services/mongoose/helpers');

module.exports = function(schema,itemName){
    schema.pre('save', function (next) {
        var that = this;
        dbConnection.getDBConnection().idenitycounter.findOneAndUpdate({},{$inc: {[itemName]: 1}},{new:false}).then(function(counters){
            that.number =  +counters[itemName];
            next();
        })
    });
}