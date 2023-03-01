const fs = require("fs");

//阻塞
const data1 = fs.readFileSync("./data1.txt", "utf-8");
console.log("同步" + data1);
fs.writeFileSync("./data2.txt", data1, "utf-8");
console.log("同步写完了");

//异步
fs.readFile('./data1.txt', 'utf-8',
    (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log("异步" + data);
      fs.writeFile('./data2.txt', `${data}`, (err) => {
      });
      console.log("回调写完了")
    }
);
console.log("异步写完了");
