import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/class/time-pass-class';
import { ProductServeServiceService } from 'src/app/services/product-serve-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{

  msg:undefined | string;
  storeProduct:undefined | product;
  constructor(private router:ActivatedRoute, private service:ProductServeServiceService){}

  ngOnInit(): void {
    let productId = this.router.snapshot.paramMap.get('id')
    productId && this.service.getProductById(productId).subscribe((result: product | undefined)=>{
      console.warn(result)
    this.storeProduct = result
   })
  }

  updateProduct(proId:product)
  {
    if(this.storeProduct)
    {
      proId.id = this.storeProduct.id;
      this.service.updateProduct(proId).subscribe((result: any)=>{
        if(result)
        {
          this.msg = "updated details..."
        }
      });
      setTimeout(() => {
        this.msg = undefined;
      }, 3000);
    }
  }
}
