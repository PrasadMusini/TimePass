import { Component } from '@angular/core';
import { pets } from 'src/app/class/time-pass-class';
import { ProductServeServiceService } from 'src/app/services/product-serve-service.service';

@Component({
  selector: 'app-pets-added-petsjson',
  templateUrl: './pets-added-petsjson.component.html',
  styleUrls: ['./pets-added-petsjson.component.css']
})
export class PetsAddedPetsjsonComponent {

  constructor(private service:ProductServeServiceService){}

  signup(val:pets)
  {
    this.service.petsAuthService(val).subscribe((data)=>{
      alert(val.name+' is added')
      console.log(data);
    })
  }
}
