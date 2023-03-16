import { Injectable } from '@angular/core';
import { environment} from "../../environments/environment";
import {calls} from "../constants/end-points";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  protected endpoint: string = environment.endpoint;
  public calls =  calls;
  constructor() { }
  get endPoint(): string {
    return this.endpoint;
  }
}
