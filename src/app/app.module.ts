import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { TestComponent } from './test/test.component';

import { Test3Component } from './test3/test3.component';
import { FooterComponent } from './footer/footer.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ShopcartComponent } from './shopcart/shopcart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    ProductdetailComponent,
    TestComponent,
    Test3Component,
    FooterComponent,
    ProductcardComponent,
    ShopcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
