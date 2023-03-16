import {User as U} from "../interfaces/user.interface";
export class User implements U {
  public email: string = '';
  public password: string = '';

  public   token: string = '';
  constructor() {
  }
}
