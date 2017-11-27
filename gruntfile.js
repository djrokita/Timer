module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
        jshint: {
                all: ['*js']
        }
});
// Load the plugins tasks
grunt.loadNpmTasks('grunt-contrib-jshint');

// Default task(s).
grunt.registerTask('default', ["jshint"]);
};