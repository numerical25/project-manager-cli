import { Injectable } from '@angular/core';
import {ApiServiceService} from "./api-service.service";
import {HttpClient} from "@angular/common/http";
import {DefaultResponse} from "../models/default-response";
import {WorkType} from "../models/work-type";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorkTypeService {

  constructor(
    protected apiService: ApiServiceService,
    protected http: HttpClient
  ) { }

  public getWorkTypes():Observable<DefaultResponse<WorkType[]>> {
    return this.http.get<DefaultResponse<WorkType[]>>(this.apiService.endPoint+this.apiService.calls.worktype.all);
  }
}
