import { Injectable } from '@angular/core';
import {ApiServiceService} from "./api-service.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DefaultResponse} from "../models/default-response";
import {RiskLevel} from "../models/risk-level";

@Injectable({
  providedIn: 'root'
})
export class RiskLevelService {

  constructor(
    protected apiService: ApiServiceService,
    protected http: HttpClient
  ) { }

  public getRiskLevels():Observable<DefaultResponse<RiskLevel[]>> {
    return this.http.get<DefaultResponse<RiskLevel[]>>(this.apiService.endPoint+this.apiService.calls.risklevel.all);
  }
}
