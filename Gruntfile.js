// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function

module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({
    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here

    // configure watch to auto update ----------------
    watch: {
      //for server side files
      files: ['server/**/*','!server/public/*'], 
      tasks: ['default'],
      options: { 
        nospawn: true,//not create child process, just one process per time
        livereload: true
      },  
    },

    develop: {
      server: {
        file: 'server/app.js',
      }
    },

    //JSHint.
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      build: ['Gruntfile.js', 'server/**/*.js', 'client/**/*.js']
    },
    
  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-develop');
  grunt.loadNpmTasks('grunt-contrib-jshint');




  //register tasks.
  grunt.registerTask('default', ['develop' , 'watch']);


};
