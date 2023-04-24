import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/class/time-pass-class';
import { ProductServeServiceService } from 'src/app/services/product-serve-service.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css'],
})
export class AddItemsComponent implements OnInit {
  productData: undefined | product[];
  a = [];

  constructor(
    private service: ProductServeServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // this.service.getAllDetails().subscribe( result=>{
    //   if(result){
    //     this.productData=result
    //   }
    // })
    this.list();
  }

  deleteProduct(id: number) {
    this.service.deleteService(id).subscribe((result: any) => {
      console.warn('tested id' + id);
      this.list();
    });
  }

  list() {
    this.service.addToList().subscribe((result: any) => {
      if (result) {
        this.productData = result;
      }
    });
  }
}
