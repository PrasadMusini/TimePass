import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent implements OnInit {

  regFrom: FormGroup;


  constructor(private fb:FormBuilder){
    this.regFrom = this.fb.group({
      firstName : ['',[Validators.required]],
      lastName : ['',[Validators.required]],
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength]],
      conPassword : ['',[Validators.required]]
    })
  }
  ngOnInit(): void {
   
  }

}
