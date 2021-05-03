import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-admin3',
  templateUrl: './admin3.component.html',
  styleUrls: ['./admin3.component.css']
})
export class Admin3Component implements OnInit {

  constructor(private ser:ApiService) { }

  ngOnInit(): void {
  }

  onSubmitadd(data:any){
    
    this.ser.addProduct(data).subscribe(e=>{
      console.log(e);
      
    })
  }
}
