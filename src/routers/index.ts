import express =require('express');
const router = express.Router();

import {getUsers} from "../controller/index.userController";

router.get('/test',(req,res)=>{res.send('hello')});

router.get('/users',getUsers);
// router.get('/users/:id',getUsers);
// router.post('/users',getUsers);
// router.patch('/users/:id',getUsers);
// router.delete('/users/:id',getUsers);
module.exports=router;
