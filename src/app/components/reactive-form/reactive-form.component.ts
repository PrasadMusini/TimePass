import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TimePassClasss } from 'src/app/class/time-pass-class';
import { ProductServeServiceService } from 'src/app/services/product-serve-service.service';
import { TimePassServiceService } from 'src/app/services/time-pass-service.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  msg: string | undefined;
  regForm: FormGroup;
  // cak:FormGroup | undefined;
  submitted = false;
  // mismatch: any= false

  emailPattern = '[a-zA-Z0-9]+[@][a-z]+[.][a-z]{2,3}';
  passwordPattern: string = '(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z]).{6,20}';
  // username = this.passwordPattern

  constructor(
    private service: ProductServeServiceService,
    private router: Router,
    private fb: FormBuilder,
    private services: TimePassServiceService
  ) {
    this.regForm = this.fb.group(
      {
        firstName: ['null', [Validators.required]],
        lastName: ['null', [Validators.required]],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern(this.emailPattern),
          ],
        ],
        password: [
          'abc@ABC123',
          [
            Validators.required,
            Validators.maxLength(30),
            Validators.pattern(this.passwordPattern),
          ],
        ],
        conPassword: ['abc@ABC123', [Validators.required]],
      },
      {
        validators: this.passwordChecking,
      }
    );
  }

  passwordChecking(form: FormGroup) {
    const password = form.get('password');
    const cpassword = form.get('conPassword');
    if (password?.value !== cpassword?.value) {
      return {
        mismatch: true,
      };
    } else {
      return null;
    }
  }
  ngOnInit(): void {}
  addproduct(data: any) {
    this.service.productServe(data).subscribe((result: any) => {
      this.msg = 'data added ...';
    });
    setTimeout(() => {
      this.msg = undefined;
    }, 3000);
  }
  timepass = new TimePassClasss();

  submit() {
    // this.services.timePassPost(this.regForm.value).subscribe((res)=>{
    //   console.log(res)
    // console.log(this.regForm.value);
    // this.submitted = true})
    console.log(this.regForm.value);
    this.submitted = true;
  }
  reset() {
    this.submitted = false;
    this.regForm.reset();
  }
}

// addproduct(data:product){
//   this.service.productServe(data).subscribe( result=>{
//     console.warn(result);
//   })
// }

// console.warn(result)
// this.router.navigate(['/list'])

// patterns

  // (?=.*[a-z])(?=.*[0-9])(?=.*[A-Z]).{6,20} username pattern (one upper lower number)
  // (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}
  // ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$
  // [A-Za-z]+[A-Z]+[a-z0-9]+[a-z0-9A-Z]*
  //[A-Za-z0-9\@$.-_+ ]+
  // [a-zA-Z0-9]*[\@][a-z]+[\.][a-z]{2,3}  email-validation
  // [6-9]{1}[0-9]{9} phone number
  // Validators.pattern("[A-Z]{1,2}[0-9][0-9A-Z]?\\s?[0-9][A-Z]{2}")
  // ^[a-zA-Z]+@
  // ^[a-z0-9_-]{8,15}$
  // ^[a-z0-5]{6,7}$
  // ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}
  