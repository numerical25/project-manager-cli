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


export class WorkRequestFormGroup extends FormGroup {

  constructor(
    formState: any,
    validators?: any,
    asyncValidators?: any
  ) {
    super(formState, validators, asyncValidators);
  }

  get benefit_types(): FormArray {
    return (this.get('benefit_types') as FormArray);
  }

  bindModelToForm(model: WorkRequest) {
    this.get('id')?.setValue(model.id);
    this.get('project_name')?.setValue(model.project_name);
    this.get('contact_email')?.setValue(model.contact_email);
    this.get('consequences')?.setValue(model.consequences);
    this.get('contact_email')?.setValue(model.contact_email);
    this.get('description')?.setValue(model.description);
    this.get('contact_name')?.setValue(model.contact_name);
    this.get('contact_number')?.setValue(model.contact_number);
    this.get('department_name')?.setValue(model.department_name);
    this.get('level_of_impact_id')?.setValue(model.level_of_impact_id);
    this.get('long_term_goals')?.setValue(model.long_term_goals);
    this.get('metrics_to_compare')?.setValue(model.metrics_to_compare);
    this.get('objectives')?.setValue(model.objectives);
    this.get('request_type_id')?.setValue(model.request_type_id);
    this.get('requested_by')?.setValue(model.requested_by);
    this.get('requires_technical_assistance')?.setValue(model.requires_technical_assistance);
    this.get('risk_dependency_assumption')?.setValue(model.risk_dependency_assumption);
    this.get('risk_level_id')?.setValue(model.risk_level_id);
    this.get('status')?.setValue(model.status);
    this.get('technical_contact_email')?.setValue(model.technical_contact_email);
    this.get('technical_contact_name')?.setValue(model.technical_contact_name);
    this.get('technical_group_name')?.setValue(model.technical_group_name);
    this.get('technical_contact_number')?.setValue(model.technical_contact_number);
    this.get('urgency_id')?.setValue(model.urgency_id);
    this.get('work_type_id')?.setValue(model.work_type_id);
    this.get('project_charter_link')?.setValue(model.project_charter_link);
    this.get('business_case')?.setValue(model.business_case);
    this.get('level_of_impact_id')?.setValue(model.level_of_impact_id);
    for(let benefittype of (this.get('benefit_types') as FormArray).controls) {
      console.log(benefittype);
      for(let benfit of model.benefit_types) {
        if((benefittype.get('id') as FormControl).value == benfit.id) {
          (benefittype.get('is_checked') as FormControl).setValue(true);
        }
      }
    }
  }
}
