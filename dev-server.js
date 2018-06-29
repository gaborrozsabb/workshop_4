const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');
const url = require('url');

const app = express();

const getPath = req => url.parse(req.url).path;
const createProxy = ({ hostname = 'localhost', port = 8181, path = ''}) =>
  proxy(`${hostname}:${port}`, {
    proxyReqPathResolver: req => `${path}${getPath(req)}`
  });

app.use(express.static(path.join(__dirname, 'src')));
app.use('/api', createProxy({ port: 8181, path: '' }));

app.listen(3000);
console.log('Listening on port 3000');