// api/proxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  // Change the target URL to the site you want to proxy
  const targetUrl = 'http://example.com';

  const proxy = createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      // Optionally add or modify headers here
    },
    onProxyRes: (proxyRes, req, res) => {
      // Optionally modify the response here
    },
    onError: (err, req, res) => {
      res.status(500).send('Proxy error: ' + err.message);
    },
  });

  return proxy(req, res);
};
