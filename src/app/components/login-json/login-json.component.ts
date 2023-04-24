import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimePassClass } from 'src/app/class/time-pass-class';
import { TimePassServiceService } from 'src/app/services/time-pass-service.service';

@Component({
  selector: 'app-login-json',
  templateUrl: './login-json.component.html',
  styleUrls: ['./login-json.component.css']
})
export class LoginJsonComponent {
  timepass = new TimePassClass();
  dataOfUsers = [];
  msg = 'hello';
  constructor(private service: TimePassServiceService, private router: Router) {}

  signup() {
    this.service.timePassPost(this.timepass).subscribe((res: any) => {
      console.log(res);
      let data = JSON.stringify(res);
      let name = JSON.parse(data);

      alert(name.username11 + ' is Added');

      localStorage.setItem('userData', data);
      var d = localStorage.getItem('userData');
      // this.router.navigate(['/ok'])
    });
  }

  getAllData() {
    this.service.getAllService().subscribe((res: any) => {
      console.log(res);
    });

    console.log('3rd Records ');
  }
}
