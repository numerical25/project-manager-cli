import { Injectable } from '@angular/core';
import {ApiServiceService} from "./api-service.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DefaultResponse} from "../models/default-response";
import {WorkType} from "../models/work-type";
import {LevelOfImpact} from "../models/level-of-impact";
import {Urgency} from "../models/urgency";

@Injectable({
  providedIn: 'root'
})
export class UrgencyService {

  constructor(
    protected apiService: ApiServiceService,
    protected http: HttpClient
  ) { }

  public getUrgencies():Observable<DefaultResponse<Urgency[]>> {
    return this.http.get<DefaultResponse<Urgency[]>>(this.apiService.endPoint+this.apiService.calls.urgency.all);
  }
}
