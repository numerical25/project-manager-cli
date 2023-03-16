import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiServiceService} from "./api-service.service";
import {DefaultResponse} from "../models/default-response";
import {WorkRequest} from "../models/work-request";
import {map, Observable} from "rxjs";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {PriorityService} from "./priority.service";
import {BenefitTypeService} from "./benefit-type.service";
import {WorkRequestFilterFormGroup} from "../forms/work-request-filter-form-group";

@Injectable({
  providedIn: 'root'
})
export class WorkRequestServiceService {

  constructor(
    protected http: HttpClient,
    protected apiService: ApiServiceService
  ) {
  }

  public getWorkRequests():Observable<DefaultResponse<WorkRequest[]>> {
    return this.http.get<DefaultResponse<WorkRequest[]>>(this.apiService.endPoint+this.apiService.calls.workrequest.all)
      .pipe(map((resp: DefaultResponse<WorkRequest[]>) => {
      return resp;
    }));
  }

  public getEditWorkRequest($id = ''):Observable<DefaultResponse<WorkRequest>> {
    return this.http.get<DefaultResponse<WorkRequest>>(this.apiService.endPoint+this.apiService.calls.workrequest.get_edit+$id+'/edit')
      .pipe(map((resp: DefaultResponse<WorkRequest>) => {
        return resp;
      }));
  }
  public filterWorkRequests(workRequest: WorkRequestFilterFormGroup): Observable<DefaultResponse<WorkRequest[]>> {
    const request = workRequest.getRawValue();
    return this.http.post<DefaultResponse<WorkRequest[]>>(this.apiService.endPoint+this.apiService.calls.workrequest.filter, request);
  }
  public saveWorkRequests(workRequest: FormGroup): Observable<DefaultResponse<WorkRequest>> {
    var request = workRequest.getRawValue();
    var requestBenefitTypes = [];
    for(var benefittype of request['benefit_types']) {
      if(benefittype['is_checked']) {
        requestBenefitTypes.push(benefittype['id']);
      }
    }
    request['benefit_types'] = requestBenefitTypes;
    return this.http.post<DefaultResponse<WorkRequest>>(this.apiService.endPoint+this.apiService.calls.workrequest.save, request);
  }
}
