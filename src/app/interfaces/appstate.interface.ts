import {User} from "./user.interface";

export interface AppState {
  user: User | null;
}

export const initialState: AppState = {
  user: null,
};
