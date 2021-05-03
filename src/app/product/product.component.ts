import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  prods :any;
  gender:string;
  constructor(private route:ActivatedRoute,private ser:ApiService) { 
    this.route.params.subscribe((param)=>{
      this.gender=param.gender
    })
    this.route.queryParams.subscribe((params)=>{
      console.log(params)
    })
    
    this.ser.getProduct(this.gender).subscribe((prod)=>{
      console.log(prod);
      this.prods=prod;
    })
  }

  ngOnInit(): void {
  }
}
