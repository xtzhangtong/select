module.exports = function (grunt) {
    // 项目配置
    grunt.initConfig({
        //读取package.json的内容，形成个json数据
        pkg: grunt.file.readJSON('package.json'),
        //压缩JS
        uglify: {
            my_target: {
                options: {
                    //sourceMap: true,
                    beautify:true,//美化源代码
                    banner: '/!*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> *!/'
                },
                files: {//多个js压缩为一个 如果不想把其中的某个一起压缩可以这样写 !'**/asd.js',两个*号表示这个目录下的所有符合条件的文件
                    'scripts/seletTarget.js': ['scripts/**/*.js']// 前面是输出目录，后面是当前工作路径
                }
            }
        },
        //压缩css
        cssmin: {
            add_banner: {
                options:{
                    banner: '/* My minified css file */',
                    report:'min'
                },
                files:[{//一次性压缩一个文件夹中的所有js文件，但不会把多个文件压缩成一个文件
                    expand: true,
                    cwd: 'styles/',
                    src: ['**/*.css'],
                    dest: 'dist/styles/',
                    ext: '.min.css' //表示处理后的文件后缀名
                }
                ]
            }
        },
        imagemin:{
            dynamic:{
                options:{
                    optimizationLevel: 7,// png图片优化水平，3是默认值，取值区间0-7
                    pngquant: true
                },
                files:[{
                    expand: true, // 如果设为true，就表示下面文件名的占位符（即*号）都要扩展成具体的文件名。
                    cwd: "images/", // 当前工作路径
                    src: ["*.{png}"], // 要出处理的文件格式(images下的所有png,jpg,gif)
                    dest: "images/" // 输出目录(直接覆盖原图)
                }]
            }
        }
    });
    // 加载任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    // 发布到测试环境
    grunt.registerTask('a', ['uglify','cssmin','imagemin']);

};