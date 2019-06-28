import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  getallproducts(){
    console.log("Request has sent for Get All Products");
    return this.http.get("http://localhost/FirstWebApi/api/product/getallproducts");
  }

  AddProduct(prod:product){
    console.log("Request has sent for Add Product");
    return this.http.post("http://localhost/FirstWebApi/api/product/AddProduct",prod);
  }
}
