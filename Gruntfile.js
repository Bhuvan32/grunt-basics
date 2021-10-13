module.exports = function(grunt) {
    const sass = require('node-sass');
    //Configuration
    grunt.initConfig({
        //pass in options to plugins, references to file etc 
        concat: {
            // concat task configuration goes here.
            js: {
                src: ['js/*.js'],
                dest: "build/script.js",
            },
            css: {
                src: ['css/*.css'],
                dest: "build/styles.css",
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'css/styles.css': 'css/sass/styles.scss',
                }
            }
        },
        less: {
        development: {
            options: {
            paths: ['']
            },
            files: {
            'css/less.css': 'css/less/*.less'
            }
        },
        },
        uglify: {
            my_target: {
                files: {
                    'build/script.js': ['build/script.js']
                }
            }
        },
        watch: {
            css: {
                files: ['css/sass/*.scss', 'css/less/*.less'],
                tasks: ['uglify', 'sass', 'less', 'concat-js', 'concat-css'],
                options: {
                livereload: true,
            },
        },
        },
        
    })

    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    
    //Register task
    grunt.registerTask('concat-js', 'concat:js')
    grunt.registerTask('concat-css', 'concat:css')
    grunt.registerTask('build', 'watch')
}