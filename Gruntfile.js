module.exports = function (grunt) {
    let pkg = grunt.file.readJSON('package.json');
    pkg.lastmodified = grunt.template.date(new Date(), 'yyyy-mm-dd');
    let banner = grunt.template.process(grunt.file.read('banner.txt'), {data: pkg});
    grunt.initConfig({
        pkg: pkg,
        clean: {
            dist: 'dist',
            tmp: 'tmp'
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['@babel/preset-env']
            },
            go: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['*.js', 'js/*.js'],
                    dest: 'tmp/es5'
                }]
            }
        },
        watch: {
            go: {
                files: ['src/*.js', 'src/*/*.css'],
                tasks: 'xyzs'
            }
        },
        uglify: {
            go: {
                options: {
                    mangle: false,
                    compress: {
                        drop_console: true,
                        sequences: true,
                        conditionals: false,
                        comparisons: true,
                        booleans: true,
                        loops: true,
                        hoist_funs: true,
                        if_return: false,
                        inline: false,
                        join_vars: true,
                        reduce_vars: true,
                        negate_iife: false,
                        passes: 1,
                    },
                    preserveComments: false,
                    beautify: true,
                    banner: banner,
                },
                files: {
                    'dist/js/index.js': ['tmp/es5/js/WeltTool.js', 'tmp/es5/index.js']
                }
            },
        },
        cssmin: {
            go: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: 'dist/css'
                }]
            }
        },

    });
    grunt.task.registerTask('build', 'build', function () {
        console.log(pkg.name)
        let indexCss = grunt.file.read('dist/css/index.css');
        let indexjs = grunt.file.read('dist/js/index.js');
        let indexInitjs = grunt.template.process(indexjs, {data: {indexCss: indexCss}});
        grunt.file.write("dist/" + pkg.name + ".js", indexInitjs)
        grunt.log.ok("完成合并")
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['watch']);//cmd:grunt
    grunt.registerTask('c', ['clean:tmp']);
    grunt.registerTask('xyzs', ['clean', 'babel', 'uglify', 'cssmin', 'build']);//cmd:grunt xiaoyu
}
