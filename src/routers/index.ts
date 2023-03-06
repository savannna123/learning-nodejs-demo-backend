import express =require('express');
const router = express.Router();

import {getUsers,getUserByName,createUser,deleteUserByName,editUserByName} from "../controller/index.userController";

router.get('/test',(req,res)=>{res.send('hello')});

router.get('/users',getUsers);
router.get('/users/:name',getUserByName);
router.post('/users',createUser);
router.patch('/users',editUserByName);
router.delete('/users',deleteUserByName);
module.exports=router;
