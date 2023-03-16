import { Component, OnInit } from '@angular/core';
import {DefaultResponse} from "../../models/default-response";
import {BenefitType} from "../../models/benefit-type";
import {BenefitTypeService} from "../../api/benefit-type.service";
import {RiskLevel} from "../../models/risk-level";
import {RiskLevelService} from "../../api/risk-level.service";
import {Priority} from "../../models/priority";
import {PriorityService} from "../../api/priority.service";
import {RequireTechnicalAssistance} from "../../models/require-technical-assistance";
import {RequireTechnicalAssistanceService} from "../../api/require-technical-assistance.service";
import {WorkRequest} from "../../models/work-request";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {workRequestControls} from "../../forms/work-request-controls";
import {WorkRequestServiceService} from "../../api/work-request-service.service";
import {RequestType} from "../../models/request-type";
import {RequestTypeService} from "../../api/request-type.service";
import {WorkType} from "../../models/work-type";
import {WorkTypeService} from "../../api/work-type.service";
import {Urgency} from "../../models/urgency";
import {UrgencyService} from "../../api/urgency.service";
import {ToastService} from "../../client/toast.service";
import {ActivatedRoute} from "@angular/router";
import {WorkRequestFormGroup} from "../../forms/work-request-form-group";
import {CheckBoxFormGroup} from "../../forms/check-box-form-group";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  benefitTypes: BenefitType[] = [];
  riskLevels: RiskLevel[] = [];
  public priorities: Priority[] = [];
  public technicalAssistanceOptions: RequireTechnicalAssistance[] = [];
  public workrequest = new WorkRequest();
  public workReqForm: WorkRequestFormGroup;
  public requestTypes: RequestType[] = [];
  public workTypes: WorkType[] = [];
  public urgencies: Urgency[] = [];
  protected work_request_id: string = '';
  constructor(
    private route: ActivatedRoute,
    protected messageService: ToastService,
    protected urgencyService: UrgencyService,
    protected workTypeService: WorkTypeService,
    protected requestTypeService: RequestTypeService,
    protected workRequestService: WorkRequestServiceService,
    protected requireTechnicalAssistanceService: RequireTechnicalAssistanceService,
    protected priorityServices: PriorityService,
    protected riskLevelService: RiskLevelService,
    protected benefitTypeService: BenefitTypeService) {
    this.work_request_id = this.route.snapshot.params['id'];
    this.workReqForm = new WorkRequestFormGroup(workRequestControls);
    this.benefitTypeService.getBenefitTypes().subscribe((response: DefaultResponse<BenefitType[]>) => {
      console.log(response);
      for(let benefitType of response.data) {
        this.workReqForm.benefit_types.push(new CheckBoxFormGroup(benefitType.id));
      }
      this.checkForWorkRequest();
      this.benefitTypes = response.data;
    });
    this.riskLevelService.getRiskLevels().subscribe((response: DefaultResponse<RiskLevel[]>) => {
      console.log(response);
      this.riskLevels = response.data;
    });
    this.benefitTypeService.getBenefitTypes().subscribe((response: DefaultResponse<BenefitType[]>) => {
      console.log(response);
      this.benefitTypes = response.data;
    });
    this.requireTechnicalAssistanceService.getRequireTechnicalAssistanceOptions()
      .subscribe((response: DefaultResponse<RequireTechnicalAssistance[]>) => {
      console.log(response);
      this.technicalAssistanceOptions = response.data;
    });
    this.requestTypeService.getRequestTypes().subscribe((response: DefaultResponse<RequestType[]>) => {
      this.requestTypes = response.data;
    });
    this.workTypeService.getWorkTypes().subscribe((response: DefaultResponse<WorkType[]>) => {
      this.workTypes = response.data;
    });
    this.urgencyService.getUrgencies().subscribe((response) => {
        this.urgencies = response.data;
    });
  }

  ngOnInit() {
  }

  checkForWorkRequest() {
    if(this.work_request_id) {
      this.workRequestService.getEditWorkRequest(this.work_request_id).subscribe((response) => {
        this.workrequest = response.data;
        this.bindWorkRequstFormData(response.data);
          console.log(response);
      });
    }
  }

  bindWorkRequstFormData(workRequest: WorkRequest) {
    this.workReqForm.bindModelToForm(workRequest);
  }

  public submit() {
    this.workRequestService.saveWorkRequests(this.workReqForm).subscribe((response: DefaultResponse<WorkRequest>) => {
      this.bindWorkRequstFormData(response.data);
      console.log(response.data);
      window.location.href = '/details/'+response.data.id;
    },(resp) => {
      var message = '';
      for(var key in resp.error.data) {
        message += resp.error.data[key][0]+'<br/>';
      }
      this.messageService.showMessage(message);
    });
    console.log(this.workReqForm);
  }

}
