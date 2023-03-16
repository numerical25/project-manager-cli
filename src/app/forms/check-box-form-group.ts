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


export class CheckBoxFormGroup extends FormGroup {

  constructor(id: string, is_checked = false) {
    super({
      id: new FormControl(id),
      is_checked: new FormControl(is_checked)
    });
  }
}
