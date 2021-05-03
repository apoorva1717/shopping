import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  search:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSearch(){
    this.router.navigate(['/product'],{queryParams:{search:this.search}})
    console.log(this.search)
  }
}
