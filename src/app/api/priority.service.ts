import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiServiceService} from "./api-service.service";
import {map, Observable} from "rxjs";
import {DefaultResponse} from "../models/default-response";
import {Priority} from "../models/priority";

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  protected _priorities: Priority[] = [];

  constructor(protected http: HttpClient, protected apiService: ApiServiceService) { }

  public getPriorities():Observable<DefaultResponse<Priority[]>> {
    return this.http.get<DefaultResponse<Priority[]>>(this.apiService.endPoint+this.apiService.calls.priority.all)
      .pipe(map((resp: DefaultResponse<Priority[]>) => {
        this._priorities = resp.data;
        return resp;
      }));
  }

  get priorities() {
    return this._priorities;
  }
}
