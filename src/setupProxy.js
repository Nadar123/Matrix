const {
    createProxyMiddleware
} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://rss.applemarketingtools.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/api/v2/us/apps/top-free/10', // rewrite path
            },
        })
    );
};