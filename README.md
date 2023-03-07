1. npm init -y
2. npm i typescript -D(-D表示生产时)
3. npx tsc --init
4. npx tsc (编译)
5. npm i express pg
6. npm i @types/express -D
7. npm i nodemon -D
8. npm i concurrently -D
9. npm i @types/pg -D



https://www.youtube.com/watch?v=z4BNZfZ1Wq8

https://ithelp.ithome.com.tw/articles/10249211  
注意点：
1. 在create和delete前，先判断存不存在
2. 在请求try里 log 入参和结果
3. 注意包名单复数
4. 注意log error 是console.error(e)
5. 没用文件不要上传
6. 在repo层 catch住error(可能出现连接问题)
7. 注意git ignore
8. 数据库连接通过环境变量配置
