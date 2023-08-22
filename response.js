const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('content-Type','text/html');
  res.write('<html>');
  res.write('<body><h1>my first node js project</h1></body>');
  res.write('</html>');
  res.end();
});



server.listen(3000);
