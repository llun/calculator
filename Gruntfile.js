module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    simplemocha: {
      options: {
        reporter: 'spec'
      },
      all: { src: ['specs/server/**/*.js'] }
    }
  });

  grunt.registerTask('test', [ 'karma', 'simplemocha' ]);
  grunt.registerTask('default', [ 'test' ]);

}

