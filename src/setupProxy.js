/**
 * http-proxy-middleware
 * 配置服务器代理
 * 主要用于请求假数据
 * 无需在任何位置导入此文件。它在启动开发服务器时自动注册
 */
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/mimapi', {
            target: "https://mimapi.xuanyiai.com/api/pi",
            changeOrigin: true,
            pathRewrite: {
                '^/mimapi': ''
            }
        })
    );
};