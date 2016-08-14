import {Component} from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './templates/login.html'
})
export class LoginComponent {
  public username:string;
  public password:string;

  constructor() {
  }

  onSubmit(){
    alert("Form submitted");
  }
}
