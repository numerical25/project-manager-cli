import {FormArray, FormControl} from "@angular/forms";


var userForm = {
  id: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
  role_id: new FormControl(''),
}

export {userForm}
