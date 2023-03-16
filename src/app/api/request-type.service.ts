import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiServiceService} from "./api-service.service";
import {map, Observable} from "rxjs";
import {DefaultResponse} from "../models/default-response";
import {RequestType} from "../models/request-type";

@Injectable({
  providedIn: 'root'
})
export class RequestTypeService {

  constructor(
    protected http: HttpClient,
    protected apiService: ApiServiceService
  ) {
  }

  public getRequestTypes():Observable<DefaultResponse<RequestType[]>> {
    return this.http.get<DefaultResponse<RequestType[]>>(this.apiService.endPoint+this.apiService.calls.requesttype.all)
      .pipe(map((resp: DefaultResponse<RequestType[]>) => {
        return resp;
      }));
  }
}
