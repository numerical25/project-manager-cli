import {FormArray, FormControl} from "@angular/forms";


var workRequestControls = {
  id: new FormControl(''),
  project_name: new FormControl(''),
  request_type_id: new FormControl(''),
  work_type_id: new FormControl(''),
  risk_level_id: new FormControl(''),
  urgency_id: new FormControl(''),
  requires_technical_assistance: new FormControl(''),
  business_case: new FormControl(''),
  status: new FormControl(''),
  project_charter_link: new FormControl(''),
  requested_by: new FormControl(''),
  department_name: new FormControl(''),
  contact_name: new FormControl(''),
  contact_email: new FormControl(''),
  contact_number: new FormControl(''),
  technical_group_name: new FormControl(''),
  technical_contact_name: new FormControl(''),
  technical_contact_email: new FormControl(''),
  technical_contact_number: new FormControl(''),
  description: new FormControl(''),
  consequences: new FormControl(''),
  risk_dependency_assumption: new FormControl(''),
  objectives: new FormControl(''),
  long_term_goals: new FormControl(''),
  metrics_to_compare: new FormControl(''),
  benefit_types: new FormArray([]),
}

export {workRequestControls}
