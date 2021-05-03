import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BaseUrl:string = "http://localhost:55185/api/user"
  constructor(private http:HttpClient) { 

  }
  login(data):Observable<Object>{
    return this.http.post(this.BaseUrl+'/login',data);
  }
  signup(data):Observable<Object>{
    return this.http.post(this.BaseUrl+'/Signup',data);
  }
  getProduct(data):Observable<Object>{
    console.log(data);
    return this.http.get("http://localhost:55185/api/products?gender="+data)
  }
  getProductById(data):Observable<Object>{
    console.log(data);
    return this.http.get("http://localhost:55185/api/products/"+data)
  }
  placeOrder(id,data):Observable<Object>{
    console.log(data);
    return this.http.post("http://localhost:55185/api/user/" +id+"/order",data)
  }
}
