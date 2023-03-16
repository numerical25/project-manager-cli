import {WorkType} from "./work-type";
import {BenefitType} from "./benefit-type";


export class WorkRequest {
  public id: string = '';
  public project_name: string = '';
  public business_case: string = '';
  public contact_name: string = '';
  public contact_email: string = '';
  public description: string = '';
  public consequences: string = '';
  public contact_number: string = '';
  public department_name: string = '';
  public level_of_impact_id: string = '';
  public long_term_goals: string = '';
  public metrics_to_compare: string = '';
  public objectives: string = '';
  public project_charter_link: string = '';
  public request_type_id: string = '';
  public requested_by: string = '';
  public requires_technical_assistance: string = '';
  public risk_dependency_assumption: string = '';
  public risk_level_id: string = '';
  public status: string = '';
  public technical_contact_email: string = '';
  public technical_contact_name: string = '';
  public technical_contact_number: string = '';
  public technical_group_name: string = '';

  public urgency_id: string = '';

  public work_type_id: string = '';

  public benefit_types: BenefitType[] = [];

  public work_type: WorkType = new WorkType();

  constructor(project_name: string = '') {
    this.project_name = project_name;
  }

}
