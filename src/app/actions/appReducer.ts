import {AppActions, AppActionTypes} from "./app.actions";
import {AppState, initialState} from "../interfaces/appstate.interface";
import {Action, ActionReducer} from "@ngrx/store";




export const appReducer: ActionReducer<AppState, AppActions> = (
  state = initialState,
  action
) => {
  console.log('Login Success action dispatched with payload:', action);
  switch (action.type) {
    case AppActionTypes.LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case AppActionTypes.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};
