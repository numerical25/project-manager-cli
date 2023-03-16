import { Injectable } from '@angular/core';
import {ApiServiceService} from "./api-service.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DefaultResponse} from "../models/default-response";
import {Status} from "../models/status";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(
    protected apiService: ApiServiceService,
    protected http: HttpClient
  ) { }

  public getStatuses():Observable<DefaultResponse<Status[]>> {
    return this.http.get<DefaultResponse<Status[]>>(this.apiService.endPoint+this.apiService.calls.status.all);
  }
}
