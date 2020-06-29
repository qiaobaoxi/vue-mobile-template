/*
 * @Author: your name
 * @Date: 2020-05-28 14:01:56
 * @LastEditTime: 2020-06-10 09:46:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RMIB\vue.config.js
 */
let url = "";
// vue.config.js
// 周华生
//  url = 'http://192.168.1.176:10001/';
// 官治民
url = 'http://192.168.1.140:10001/';
// 马怀啸
// url = 'http://192.168.1.162:10001/';
//季东升
// url = 'http://192.168.1.175:10001/';
//test
// url = 'http://129.211.191.80:10001/';


module.exports = {
    // 部署应用包基本url
    // publicPath: process.env.NODE_ENV === 'production' ? '/production' : '/',

    // 打包后文件目录名称
    outputDir: 'dist',

    // 开发环境配置
    devServer: {
        // lint 报错提示
        overlay: {
            warnings: true,
            errors: true
        },

        // 设置主机地址
        // host: 'localhost',
        // port: 8080,

        // 设置代理
        proxy: {
            '/javaadmin': {
                target: url,
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/javaadmin': '/javaadmin'
                }
            },
            '/upload': {
                target: 'https://localhost:8080',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/upload': ''
                }

            }
        }
    },
    lintOnSave: false,

    // 是否使用包含时运行编译器的vue 构建版本
    transpileDependencies: [],

    // 生产环境source map 
    productionSourceMap: true,

    // css 处理
    css: {
        // 设置true css 文件名可以省略
        modules: false,
        loaderOptions: {
            // 设置scss 公共变量
            // scss: {}
        }
    },


};