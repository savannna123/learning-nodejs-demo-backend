const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/user' || pathName === '/') {
    res.end("this is user");
  } else if (pathName === '/api') {
    fs.readFile('./data.json', 'utf8',(err, data)=>{
      const json = JSON.parse(data);
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html',
      'headers': 'this is header'
    });
    res.end('<h1>error page</h1>')
  }
})

server.listen(8080, `127.0.0.1`, () => {
  console.log("this is 8080");
})
