import {json, Request, Response} from "express";
import {pool} from "../db/connect";
import {QueryResult} from "pg";

export const getUsers = async (req:Request,res:Response):Promise<Response> =>{
 try{
   const response:QueryResult =await pool.query('SELECT * FROM users');
   return res.status(200).json(response.rows);
 }catch (e){
   console.log(e);
   return res.status(500).json("Internal Server Error");
 }
}

export const getUserByName = async (req:Request,res:Response):Promise<Response> =>{
  try{
    const name = req.params.name;
    const response:QueryResult =await pool.query('SELECT * FROM users WHERE user_name = $1',[name]);
    return res.status(200).json(response.rows)
  }catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
}

export const createUser = async (req:Request,res:Response):Promise<Response> => {
  try{
    const { username , password ,roleName} = req.body;
    const response:QueryResult =await pool.query('INSERT INTO users (user_name,password,role_id) VALUES ($1,$2,(SELECT id FROM role where role_name = $3))',[username , password ,roleName]);
    return res.status(200).json({
      message:"User create successfully",
      body:{
        user:{
          username,
          password,
          roleName
        }
      }
    })
  }catch (e){
    console.log(e.message);
    return res.status(500).json(e.message);
  }
}
