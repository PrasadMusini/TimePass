import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/time-pass-class';
import { ProductServeServiceService } from 'src/app/services/product-serve-service.service';

@Component({
  selector: 'app-login-backend',
  templateUrl: './login-backend.component.html',
  styleUrls: ['./login-backend.component.css']
})
export class LoginBackendComponent implements OnInit{

  user = new User();
  email!: string;
password!: any;
  constructor(private service: ProductServeServiceService,private router:Router){

  }

  ngOnInit(): void {
  
  }

  login(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data =>{
        this.router.navigate(['/signup'])
        console.log("got the access");
      },
      (error) =>{
        console.log("error occured");
        alert("invalid credentials");
      }
    )
  }



}
