import express =require('express');
const router = express.Router();

import {getUsers,getUserByName} from "../controller/index.userController";

router.get('/test',(req,res)=>{res.send('hello')});

router.get('/users',getUsers);
router.get('/users/:name',getUserByName);
// router.post('/users',getUsers);
// router.patch('/users/:id',getUsers);
// router.delete('/users/:id',getUsers);
module.exports=router;
