import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics = ['Angular', 'React', 'vue'];
  topicHasError = true;
  submitted = false;
  errorMsg;

  userModel = new User('Rob', 'rob@test.com', 3479778827, 'default', 'morning', true);
  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value){
    this.topicHasError = (value === 'default') ? true : false;
  }

  onSubmit(userForm){
    console.log(userForm);
    
    /*this.submitted = true;
    this._enrollmentService.enroll(this.userModel).subscribe(
      data => console.log("success", data),
      error => this.errorMsg = error.statusText
    );*/
    
  }
}
