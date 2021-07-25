import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status: string;
  errorMsg: string;
  msg: string;
  showDiv: boolean = false;
  constructor(private _userService: UserService) { }
  submitLoginForm(form: NgForm) {
    this._userService.validateCredentials(form.value.email, form.value.password).subscribe(
      responseLoginStatus => {
        this.status = responseLoginStatus;
        this.showDiv = true;
        if (this.status.toLowerCase() != "invalid credentials") {
          this.msg = "Login Successful";
        }
        else {
          this.msg = this.status + ". Try again with valid credentials.";
        }
      },
      responseLoginError => {
        this.errorMsg = responseLoginError;
      },
      () => console.log("SubmitLoginForm method executed successfully")
    );
  }
  ngOnInit() {
  }
}
 
