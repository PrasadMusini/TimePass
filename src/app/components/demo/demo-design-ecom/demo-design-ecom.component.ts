import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-design-ecom',
  templateUrl: './demo-design-ecom.component.html',
  styleUrls: ['./demo-design-ecom.component.css']
})
export class DemoDesignECOMComponent {

  url: string = "../assets/img1.jpg";
  imageChange(event: any){
      this.url = event.target.src;
  }
}
