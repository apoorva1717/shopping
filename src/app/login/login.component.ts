import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any;
  password:any;
  constructor(private renderer:  Renderer2,private elementRef: ElementRef) {

   }
  
  OnLogin(){
    console.log(this.username,this.password)
  }
  OpenSignUp(){
    var d1 = this.elementRef.nativeElement.querySelector('.container');
    d1.classList.add("right-panel-active")
  }
  OpenSignIn(){
    var d1 = this.elementRef.nativeElement.querySelector('.container');
    d1.classList.remove("right-panel-active")
  }
  ngOnInit(): void {
  }

}



  