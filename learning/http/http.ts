const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/user' || pathName === '/') {
    res.end("this is user");
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html',
      'headers':'this is header'
    });
    res.end('<h1>error page</h1>')
  }
})

server.listen(8080, `127.0.0.1`, () => {
  console.log("this is 8080");
})
