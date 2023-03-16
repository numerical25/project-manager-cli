import {
  AbstractControlOptions,
  AsyncValidatorFn,
  Form,
  FormArray,
  FormControl,
  FormGroup,
  ValidatorFn
} from "@angular/forms";
import {WorkRequest} from "../models/work-request";
import {BenefitType} from "../models/benefit-type";
import {CheckBoxFormGroup} from "./check-box-form-group";
import {RiskLevel} from "../models/risk-level";
import {RequestType} from "../models/request-type";
import {Urgency} from "../models/urgency";
import {LevelOfImpact} from "../models/level-of-impact";
import {Status} from "../models/status";


export class WorkRequestFilterFormGroup extends FormGroup {

  constructor() {
    super({
      statuses: new FormArray([]),
      type: new FormArray([]),
      request_types: new FormArray([]),
      work_types: new FormArray([]),
      risk_levels: new FormArray([]),
      urgencies: new FormArray([]),
      benefit_types: new FormArray([]),
      priorities: new FormArray([]),
      level_of_impacts: new FormArray([]),
    });
  }
  loadBenefitTypes(data: BenefitType[]) {
    for(let benefitType of data) {
      this.benefit_types.push(new CheckBoxFormGroup(benefitType.id));
    }
  }
  loadRiskLevels(data: RiskLevel[]) {
    for(let riskLevel of data) {
      this.risk_levels.push(new CheckBoxFormGroup(riskLevel.id));
    }
  }
  loadRequestTypes(data: RequestType[]) {
    for(let requestType of data) {
      this.request_types.push(new CheckBoxFormGroup(requestType.id));
    }
  }

  loadLevelOfImpacts(data: LevelOfImpact[]) {
    for(let levelofImpact of data) {
      this.level_of_impacts.push(new CheckBoxFormGroup(levelofImpact.id));
    }
  }
  loadUrgencies(data: Urgency[]) {
    for(let urgency of data) {
      this.urgencies.push(new CheckBoxFormGroup(urgency.id));
    }
  }
  loadPriorities(data: Urgency[]) {
    for(let priority of data) {
      this.priorities.push(new CheckBoxFormGroup(priority.id));
    }
  }
  loadStatuses(data: Status[]) {
    for(let status of data) {
      this.priorities.push(new CheckBoxFormGroup(status.id));
    }
  }
  get benefit_types(): FormArray {
    return (this.get('benefit_types') as FormArray);
  }
  get risk_levels(): FormArray {
    return (this.get('risk_levels') as FormArray);
  }
  get request_types(): FormArray {
    return (this.get('request_types') as FormArray);
  }
  get urgencies(): FormArray {
    return (this.get('urgencies') as FormArray);
  }
  get level_of_impacts(): FormArray {
    return (this.get('level_of_impacts') as FormArray);
  }
  get priorities(): FormArray {
    return (this.get('priorities') as FormArray);
  }
  get statuses(): FormArray {
    return (this.get('statuses') as FormArray);
  }
}
