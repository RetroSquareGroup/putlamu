module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            task1: {
                files: ['dist/*.js','site/*.html'],
                tasks: ['copy:site']
            }        },
        copy: {
          site: {
              cwd: 'site/',
              src: ['index.html','templates/partials/*.html'],
              dest: 'dist/',
              expand: true
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('dev-watch', ['watch']);
};
