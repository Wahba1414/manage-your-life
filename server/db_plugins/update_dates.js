module.exports = function(schema,options){
    schema.add({
        createdDate: Date, 
        updatedDate: Date, 
    });

    schema.pre('save', function (next) {
        this.createdDate = new Date();
        next();
    });


    schema.pre('update', function (next) {
        this.updatedDate = new Date();
        next();
    });
   
}