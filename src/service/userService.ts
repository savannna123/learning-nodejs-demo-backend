import {UserRepo} from "../repository/userRepo";

export class UserService{
  private readonly userRepo = new UserRepo();
  public async getUsers(){
   return await this.userRepo.findUsers();
  }
  public async getUserByName(name:string){
    return await this.userRepo.findUserByName(name);
  }
  public async deleteUserByName(name:string){
    return await this.userRepo.deleteUserByName(name);
  }
  public async createUser(username:string,password:string,roleName:string){
    return await this.userRepo.createUser(username,password,roleName);
  }
  public async updateUser(name:string,password:string){
    return await this.userRepo.updateUser(name,password);
  }

}

