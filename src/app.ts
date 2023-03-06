import express =require('express');
const app = express();

const indexRoutes = require('./routers/index');

//中间件
app.use(express.json());//json转化成对象
app.use(express.urlencoded({extended:false}));//url转json

app.use(indexRoutes);
app.listen(3000,()=>{
  console.log("???")
});


