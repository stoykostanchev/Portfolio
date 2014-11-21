module.exports = function (grunt) {
    // Project configuration.
    var pkg = require('./package.json');
    
    grunt.initConfig({
        pkg: pkg,
        buildcontrol: {
            options: {
              dir: 'client/dist',
              commit: true,
              push: true,
              message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
            },
            heroku: {
              options: {
                remote: 'git@heroku.com:mindcache.git',
                branch: 'master',
                tag: pkg.version
              }
            },
            local: {
              options: {
                remote: '../../',
                branch: 'dist'
              }
            }
        },
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
                dest: 'client/dist/<%= pkg.name %>.js'
            },
            styles: {
                src: [
                    'client/assets/styles/*.css',
                    'client/app/**/*.css',
                    'client/components/**/*.css',
                    '!client/assets/styles/icons.css'
                ],
                dest: 'client/dist/<%= pkg.name %>.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: '<%= concat.dist.src %>',
                dest: 'client/dist/<%= pkg.name %>.min.js'
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
    require('jit-grunt')(grunt, {
        buildcontrol: 'grunt-build-control'
    });
    // Default task(s).
    grunt.registerTask('default', [
        'concat','uglify'
    ]);
    grunt.registerTask('build', [
      'concat','uglify'
    ]);
}