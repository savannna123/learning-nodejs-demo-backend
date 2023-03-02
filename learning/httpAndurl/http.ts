const http = require('http');
const url = require('url');
const fs = require('fs');

//外部只执行一次
const data = fs.readFileSync('./data.json', 'utf8');
const jsonData = JSON.parse(data);
//每次发请求都会执行
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/user' || pathName === '/') {
    res.end("this is user");
  } else if (pathName === '/api') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(jsonData);
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
export {};
