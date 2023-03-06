import {pool} from "../db/connect";
import {QueryResult} from "pg";
export class UserRepo{
  public async findUsers ():Promise<QueryResult>{
    return await pool.query('SELECT * FROM users');
  }

  public async findUserByName(name:string):Promise<QueryResult>{
    return await pool.query('SELECT * FROM users WHERE user_name = $1', [name]);
  }

  public async deleteUserByName(name:string):Promise<QueryResult>{
    return await pool.query('UPDATE users set deleted = true, deleted_at = now() where user_name =$1', [name]);
  }

  public async createUser(username:string,password:string,roleName:string):Promise<QueryResult>{
    return await pool.query('INSERT INTO users (user_name,password,role_id) VALUES ($1,$2,(SELECT id FROM role where role_name = $3))', [username, password, roleName]);
  }

  public async updateUser(name:string,password:string):Promise<QueryResult>{
    return await pool.query('UPDATE users set password = $2 where user_name =$1', [name,password]);
  }
}
