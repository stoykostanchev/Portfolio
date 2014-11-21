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
                    'client/app/app.js',
                    'client/app/**/*.js',
                    'client/components/**/*.js'
                ],
                dest: 'client/build/<%= pkg.name %>.js'
            },
            styles: {
                src: [
                    'client/assets/styles/*.css',
                    'client/app/**/*.css',
                    'client/components/**/*.css',
                    '!client/assets/styles/icons.css'
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
            },
            dependencies : {
                files: ['Gruntfile.js'],
                tasks: ['concat', 'uglify']
            }
        },
        wiredep: {
          task: {
            src: [
              'client/index.html'
            ]
          }
        }
    });
    // Load the plugins
    require('jit-grunt')(grunt);
    // Default task(s).
    grunt.registerTask('default', ['concat','uglify']);
}