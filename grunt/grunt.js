module.exports = function (grunt) {
  'use strict';

  // Load local NPM tasks
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-growl');

  grunt.initConfig({

    lint : {
      all: [
        '../js/anchor.js',
        '../js/alertManager.js'
      ]
    },

    minify : {
      all: [
        '../less/anchor.less',
        '../less/ie7.less'
      ]
    },

    recess: {
      main: {
        src: [
        '../less/anchor.less'
        ],
        dest: '../css/anchor.2.4.1.css',
        options: {
            compile: true,
            compress: true
        }
      },
      ie7: {
        src: [
        '../less/ie7.less'
        ],
        dest: '../css/ie7.css',
        options: {
            compile: true,
            compress: true
        }
      }
    },

    watch : {
      scripts: {
        files: [
          '../less/*.less',
          '../js/*.js',
          '../../../js/*.js'
        ],
        tasks: 'lint:all min:dist recess:ie7 recess:main'
      }
    },

    min: {
      dist: {
        src : [
          '../../../bootstrap/docs/assets/js/jquery.js',
          '../../../js/lodash.min.js',
          '../../../bootstrap/docs/assets/js/bootstrap.min.js',
          '../../../js/responsimage.js',
          '../../../js/jquery.cookie.js',
          '../../../js/mediaelement.js',
          '../../../js/reftagger.js',
          '<config:lint.all>'],
        dest: '../js/anchor.2.4.1.js',
        separator: ';'
      }
    },

    growl : {
      compile : {
        title : "Grunt.js",
        message : "Grunt was run successfully"
      }
    }

});

// Main task
grunt.registerTask('default', 'lint:all min:dist recess:ie7 recess:main growl:compile')};