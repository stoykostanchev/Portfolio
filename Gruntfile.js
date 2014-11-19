module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n'
            },
            dist: {
                src: [
                    'client/app.js',
                    'client/modules/**/*.js',
                    'client/common/**/*.js'
                ],
                dest: 'client/build/<%= pkg.name %>.js'
            },
            styles: {
                src: [
                    'client/common/resources/css/*.css',
                    'client/modules/**/*.css',
                    '!client/common/resources/css/icons.css'
                ],
                dest: 'client/build/<%= pkg.name %>.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: '<%= concat.dist.src %>',
                dest: 'client/build/<%= pkg.name %>.min.js'
            }
        },
        watch: {
            scripts : {
                files: ['<%= concat.dist.src %>'],
                tasks: ['concat', 'uglify']
            },
            styles : {
                files: ['<%= concat.styles.src %>'],
                tasks: ['concat', 'uglify']
            },
            grunt : {
                files: ['Gruntfile.js'],
                options: {
                  reload: true
                }
            }
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
    grunt.registerTask('default', ['concat','uglify']);
}