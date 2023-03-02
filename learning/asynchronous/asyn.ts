const fs = require('fs');
const superagent = require('superagent');
const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      //将data标记为resolve
      resolve(data);
    })
  })
}

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })
}

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    const res = await superagent.get(`https://dog.ceo/api/breed/${data.toString().replace(/[\r\n]/g, "")}/images/random`);
    console.log(res.body.message);
    await writeFilePro(`${__dirname}/dog.txt`, res.body.message);
  } catch (e) {
    //在这里err只是被打印，并没有被标记为reject
    throw e;
  }
}

getDogPic()
  .then(() => {
  console.log("这是resolve")
}).catch((e) => {
  //所以这里catch不到err
  console.log("错了"+e);
});
