const fs = require('fs');
const superagent = require('superagent');
//promise 通过then避免了回调函数，每一个回调函数都能改成promise
const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      //将data标记为resolve
      resolve(data);
    })
  })
}

const writeFilePro = (file,data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })
}

readFilePro(`${__dirname}/dog.txt`).then((data) => {
  return superagent
  //get到的是一个promise
  .get(`https://dog.ceo/api/breed/${data.toString().replace(/[\r\n]/g, "")}/images/random`);})

  //处理promise resolve状态
  .then(res => {
    console.log(res.body.message);
    return writeFilePro('dog-image.txt', res.body.message);
  })
  //处理promise reject状态
  .catch(err => {
    console.log(err.message);
  })

export {};
