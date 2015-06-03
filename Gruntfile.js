var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            task1: {
                files: ['site/js/**/*.js'],
                tasks: ['jshint','webpack:site']
            },
            task2: {
                files: ['dist/bundle.js'],
                tasks: ['uglify:site']
            },
            task3: {
                files: ['dist/bundle.min.js'],
                tasks: ['copy:site', 'clean:site']
            },
            task4: {
                files: ['site/index.html'],
                tasks: ['copy:site']
            }
        },
        uglify: {
            site: {
                files: {
                    'dist/bundle.min.js': 'dist/bundle.js'
                }
            }
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            all: ['site/js/**/*.js']
        },
        webpack: {
            site: {
                context: __dirname + '/site',
                entry: './js/index.js',
                output: {
                    path: __dirname + '/dist',
                    filename: 'bundle.js'
                },
                stats: {
                    colors: true,
                    modules: true,
                    reasons: true
                },
                progress: false,
                plugins: [
                    new ngAnnotatePlugin({
                        add: true,
                        singleQuotes: true
                    })
                ]
            }
        },
        copy: {
          site: {
              cwd: '.',
              src: 'site/index.html',
              dest: 'dist/index.html',
              expand: true
          }
        },
        clean: {
          site: ['dist/bundle.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.registerTask('dev', ['watch']);
};
