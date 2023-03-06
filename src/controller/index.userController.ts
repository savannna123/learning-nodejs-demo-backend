import {Request, Response} from "express";
import {QueryResult} from "pg";
import {UserService} from "../service/userService";

export class UserController {
  private readonly userService =new UserService();
  public getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
      const response: QueryResult = await this.userService.getUsers();
      return res.status(200).json(response.rows);
    } catch (e) {
      console.log(e);
      return res.status(500).json("Internal Server Error");
    }
  }

  public getUserByName = async (req: Request, res: Response): Promise<Response> => {
    try {
      const name = req.params.name;
      const response: QueryResult = await this.userService.getUserByName(name);
      return res.status(200).json(response.rows)
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  }

  public createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const {username, password, roleName} = req.body;
      await this.userService.createUser(username,password,roleName);
      return res.status(200).json({
        message: "User create successfully",
        body: {
          user: {
            username,
            password,
            roleName
          }
        }
      })
    } catch (e) {
      console.log(e.message);
      return res.status(500).json(e.message);
    }
  }

  public deleteUserByName = async (req: Request, res: Response): Promise<Response> => {
    try {
      const name = req.query.name;
      if (typeof name === "string") {
        await this.userService.deleteUserByName(name);
      }
      return res.status(200).json({
        message: `User ${name} deleted successfully`
      })
    } catch (e) {
      console.log(e);
      return res.status(500);
    }
  }

  public editUserByName = async (req: Request, res: Response): Promise<Response> => {
    try {
      const name = req.query.name;
      const {password} = req.body;
      if (typeof name === "string") {
        await this.userService.updateUser(name, password);
      }
      return res.status(200).json({
        message: `User ${name} has changed password into ${password}`
      })
    } catch (e) {
      console.log(e);
      return res.status(500);
    }
  }
}

