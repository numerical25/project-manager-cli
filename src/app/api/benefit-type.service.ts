import { Injectable } from '@angular/core';
import {ApiServiceService} from "./api-service.service";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {DefaultResponse} from "../models/default-response";
import {BenefitType} from "../models/benefit-type";

@Injectable({
  providedIn: 'root'
})
export class BenefitTypeService {

  protected _benefittypes: BenefitType[] = [];

  constructor(
    protected apiService: ApiServiceService,
    protected http: HttpClient
  ) { }

  public getBenefitTypes():Observable<DefaultResponse<BenefitType[]>> {
    return this.http.get<DefaultResponse<BenefitType[]>>(this.apiService
      .endPoint+this.apiService.calls.benefittype.all).pipe(map((response)=> {
        this._benefittypes = response.data;
        return response;
    }));
  }

  get benefit_types() {
    return this._benefittypes;
  }
}
