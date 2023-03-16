import { Injectable } from '@angular/core';
import {ApiServiceService} from "./api-service.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DefaultResponse} from "../models/default-response";
import {Urgency} from "../models/urgency";
import {FormGroup} from "@angular/forms";
import {AuthTokem} from "../models/auth-token";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    protected apiService: ApiServiceService,
    protected http: HttpClient
  ) { }

  public getUrgencies():Observable<DefaultResponse<Urgency[]>> {
    return this.http.get<DefaultResponse<Urgency[]>>(this.apiService.endPoint+this.apiService.calls.urgency.all);
  }

  public login(user: FormGroup):Observable<DefaultResponse<AuthTokem>> {
    var request = user.getRawValue();
    return this.http.post<DefaultResponse<AuthTokem>>(this.apiService.endPoint+this.apiService.calls.user.login, request);
  }
}
