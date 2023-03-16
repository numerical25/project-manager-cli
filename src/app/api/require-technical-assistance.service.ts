import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiServiceService} from "./api-service.service";
import {Observable} from "rxjs";
import {DefaultResponse} from "../models/default-response";
import {Priority} from "../models/priority";
import {RequireTechnicalAssistance} from "../models/require-technical-assistance";

@Injectable({
  providedIn: 'root'
})
export class RequireTechnicalAssistanceService {

  constructor(protected http: HttpClient, protected apiService: ApiServiceService) { }

  public getRequireTechnicalAssistanceOptions():Observable<DefaultResponse<RequireTechnicalAssistance[]>> {
    return this.http.get<DefaultResponse<RequireTechnicalAssistance[]>>(
      this.apiService.endPoint+this.apiService.calls.requiretechnicalassistance.all);
  }
}
