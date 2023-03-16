import { Component } from '@angular/core';
import {WorkRequestServiceService} from "../../api/work-request-service.service";
import {DefaultResponse} from "../../models/default-response";
import {WorkRequest} from "../../models/work-request";
import {WorkType} from "../../models/work-type";
import {WorkTypeService} from "../../api/work-type.service";
import {LevelOfImpact} from "../../models/level-of-impact";
import {LevelOfImpactService} from "../../api/level-of-impact.service";
import {UrgencyService} from "../../api/urgency.service";
import {Urgency} from "../../models/urgency";
import {RiskLevel} from "../../models/risk-level";
import {RiskLevelService} from "../../api/risk-level.service";
import {BenefitTypeService} from "../../api/benefit-type.service";
import {BenefitType} from "../../models/benefit-type";
import {Status} from "../../models/status";
import {StatusService} from "../../api/status.service";
import {Priority} from "../../models/priority";
import {PriorityService} from "../../api/priority.service";
import {RequestTypeService} from "../../api/request-type.service";
import {RequestType} from "../../models/request-type";
import {WorkRequestFilterFormGroup} from "../../forms/work-request-filter-form-group";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../interfaces/appstate.interface";
import {LoginSuccess} from "../../actions/app.actions";
import {User} from "../../models/user";
import {delay} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public workrequests: WorkRequest[] = [];
  public worktypes: WorkType[] = [];
  public urgencies: Urgency[] = [];
  public levelOfImpact: LevelOfImpact[] = [];
  public riskLevels: RiskLevel[] = [];
  public benefitTypes: BenefitType[] = [];
  public statuses: Status[] = [];
  public priorities: Priority[] = [];
  public requestTypes: RequestType[] = [];
  public workRequestFilterForm: WorkRequestFilterFormGroup;

  user$ = this.store.pipe(select((state: AppState) => state.user));
  constructor(
    protected store: Store<AppState>,
    protected requestTypeService: RequestTypeService,
    protected priorityServices: PriorityService,
    protected statusService: StatusService,
    protected benefitTypeService: BenefitTypeService,
    protected riskLevelService: RiskLevelService,
    protected urgencyService: UrgencyService,
    protected levelOfImpactService: LevelOfImpactService,
    protected workTypeService: WorkTypeService,
    protected workRequestService: WorkRequestServiceService) {
    let user = {
      email: '',
      password: '',
      token: 'token'
    }
    console.log(new LoginSuccess(user));
    this.store.dispatch(new LoginSuccess(user));
    this.user$.pipe(delay(500)).subscribe(res => {
      console.log('updated data', res);
    });
    this.workRequestFilterForm = new WorkRequestFilterFormGroup();
    console.log(this.workRequestFilterForm);
    this.workRequestService.getWorkRequests().subscribe((res:DefaultResponse<WorkRequest[]>) => {
      this.workrequests = res.data;
    });
    this.requestTypeService.getRequestTypes().subscribe((response: DefaultResponse<RequestType[]>) => {
      this.workRequestFilterForm.loadRequestTypes(response.data)
      this.requestTypes = response.data;
    });
    this.levelOfImpactService.getLevelOfImpacts().subscribe((response: DefaultResponse<LevelOfImpact[]>) => {
      this.workRequestFilterForm.loadLevelOfImpacts(response.data);
        this.levelOfImpact = response.data;
    });
    this.urgencyService.getUrgencies().subscribe((response: DefaultResponse<Urgency[]>) => {
      this.workRequestFilterForm.loadUrgencies(response.data);
      this.urgencies = response.data;
    });
    this.riskLevelService.getRiskLevels().subscribe((response: DefaultResponse<RiskLevel[]>) => {
      this.workRequestFilterForm.loadRiskLevels(response.data);
      this.riskLevels = response.data;
    });
    this.benefitTypeService.getBenefitTypes().subscribe((response: DefaultResponse<BenefitType[]>) => {
      this.workRequestFilterForm.loadBenefitTypes(response.data);
      this.benefitTypes = response.data;
    });
    this.statusService.getStatuses().subscribe((response: DefaultResponse<Status[]>) => {
      this.workRequestFilterForm.loadStatuses(response.data);
      this.statuses = response.data;
    });
    this.priorityServices.getPriorities().subscribe((response: DefaultResponse<Priority[]>) => {
      this.workRequestFilterForm.loadPriorities(response.data);
      this.priorities = response.data;
    });
  }

  filterWorkRequest() {
    this.workRequestService.filterWorkRequests(this.workRequestFilterForm).subscribe(res => {
      this.workrequests = res.data;
    }, error => {
      console.log(error);
    });
  }

}
