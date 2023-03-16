import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

import {userForm} from "../../constants/user";
import {UserService} from "../../api/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userForm: FormGroup = new FormGroup(userForm);
  constructor(protected userService: UserService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.userForm);
    this.userService.login(this.userForm).subscribe(res => {
      console.log(res);
    })
  }

}
