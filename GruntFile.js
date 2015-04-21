module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      gruntfile: {
        files: ['GruntFile.js']
      },
      sass: {
        files: ['**/*.scss', '!**/node_modules/**'],
        tasks: ['compile'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          src: ['**/*.scss', '!**/node_modules/**'],
          dest: './',
          ext: '.css'
        }]
      }
    }
  });

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('compile', ['sass']);
}
