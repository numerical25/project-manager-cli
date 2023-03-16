import {Action} from "@ngrx/store";
import {User} from "../interfaces/user.interface";

export enum AppActionTypes {
  LOGIN_SUCCESS = '[App] Login Success',
  LOGOUT = '[App] Logout',
}

export class LoginSuccess implements Action {
  readonly type = AppActionTypes.LOGIN_SUCCESS;
  constructor(public payload: User) {}
}

export class Logout implements Action {
  readonly type = AppActionTypes.LOGOUT;
}

export type AppActions = LoginSuccess | Logout;
