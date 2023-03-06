import express =require('express');
const router = express.Router();

import {UserController} from "../controller/index.userController";
const userController = new UserController();
router.get('/test',(req,res)=>{res.send('hello')});

router.get('/users',userController.getUsers);
router.get('/users/:name',userController.getUserByName);
router.post('/users',userController.createUser);
router.patch('/users',userController.editUserByName);
router.delete('/users',userController.deleteUserByName);

module.exports=router;
