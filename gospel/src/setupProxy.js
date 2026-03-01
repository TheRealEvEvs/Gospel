const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use('/bible-proxy', createProxyMiddleware({
    target: 'https://bible-api.com',
    changeOrigin: true,
    pathRewrite: { '^/bible-proxy': '' },
  }));
};
