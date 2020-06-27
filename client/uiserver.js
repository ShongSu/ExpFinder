const express = require('express');
const app = express();
const proxy = require('http-proxy-middleware');
const enableHMR = true;
const path = require('path');

if (enableHMR) {
  console.log('Adding dev middleware, enabling HMR');
  const webpack = require('webpack');
  const devMiddleware = require('webpack-dev-middleware');
  const hotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config.js');
  config.entry.app.push('webpack-hot-middleware/client');
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

app.use(express.static('public'));
app.use('/api', proxy({ target: 'http://localhost:3000' }));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});


app.listen(8000, function () {
  console.log('UI started on port 8000');
});