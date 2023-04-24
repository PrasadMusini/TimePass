import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case-header',
  templateUrl: './switch-case-header.component.html',
  styleUrls: ['./switch-case-header.component.css']
})
export class SwitchCaseHeaderComponent {


  public result = "login";


  signup()
  {
    this.result = "signup"
  }

  home()
  {
    this.result = "home"
  }

  login()
  {
    this.result = "login"
  }

  store:any = [90,30,40,1,3,5]
}
