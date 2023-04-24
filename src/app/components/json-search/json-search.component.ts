import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServeServiceService } from 'src/app/services/product-serve-service.service';

@Component({
  selector: 'app-json-search',
  templateUrl: './json-search.component.html',
  styleUrls: ['./json-search.component.css']
})
export class JsonSearchComponent implements OnInit{

  constructor(private active:ActivatedRoute,private router:Router,private service:ProductServeServiceService){}

  ngOnInit(): void {
 
}
  searchFun(val:string)
  {
    let query = this.active.snapshot.paramMap.get('query')

    query && this.service.searchService(val).subscribe((result)=>{
      console.warn(result)
    })
  }
}
