import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {DefaultResponse} from "../models/default-response";
import {WorkType} from "../models/work-type";
import {HttpClient} from "@angular/common/http";
import {ApiServiceService} from "./api-service.service";
import {LevelOfImpact} from "../models/level-of-impact";

@Injectable({
  providedIn: 'root'
})
export class LevelOfImpactService {

  constructor(protected http: HttpClient, protected apiService: ApiServiceService) { }

  public getLevelOfImpacts():Observable<DefaultResponse<LevelOfImpact[]>> {
    return this.http.get<DefaultResponse<LevelOfImpact[]>>(this.apiService.endPoint+this.apiService.calls.levelofimpact.all);
  }
}
