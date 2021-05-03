import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatDialogModule} from '@angular/material/dialog'
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon'
import {MatRadioModule} from '@angular/material/radio'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';

import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { TestComponent } from './test/test.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';

import { Test3Component } from './test3/test3.component';
import { FooterComponent } from './footer/footer.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ShopcartComponent } from './shopcart/shopcart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OrderDialogComponent } from './notifications/order-dialog/order-dialog.component';

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
    ShopcartComponent,
    OrderDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule, BrowserAnimationsModule,MatSnackBarModule,MatCarouselModule.forRoot(),
    MatDialogModule,MatFormFieldModule,ReactiveFormsModule,
    MatSelectModule,MatIconModule,MatRadioModule,MatCheckboxModule,
    MatInputModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[OrderDialogComponent]
})
export class AppModule { }
