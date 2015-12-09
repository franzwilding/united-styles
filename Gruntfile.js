module.exports = function(grunt) {
  var buildPath = '../united-styles/build/';
  var destPath = './assets/';
  grunt.initConfig({
    copy: {
      css: {
        files: [{
          expand: true,
          flatten: true,
          src: [buildPath + 'united.css'],
          dest: destPath
        }]
      },
      map: {
        files: [{
          expand: true,
          flatten: true,
          src: [buildPath + 'united.css.map'],
          dest: destPath
        }]
      }
    },
    watch: {
      css: {
        files: [buildPath + 'united.css'],
        tasks: ['copy:css']
      },
      map: {
        files: [buildPath + 'united.css.map'],
        tasks: ['copy:map']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['copy']);
};
