import { Component, OnInit } from '@angular/core';
import {product} from '../Models/product';
import {ProductServiceService} from '../Service/product-service.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private prodService:ProductServiceService) { }
cols: any[] = <any[]>[];
  ProductDetails: product[] = <product[]>[];
  ProductData: product = <product>{};
  SelectedProduct: product = <product>{};
  isShowLoader:boolean = false;
  Name:string ="Jagadeesh";
  ngOnInit() {
    this.cols = [
      { field: 'Id', header: 'ID' },
      { field: 'ProductName', header: 'Product Name' },
      { field: 'SupplierId', header: 'Supplier ID' },
      { field: 'UnitPrice', header: 'Unit Price' },
      { field: 'Package', header: 'Package' },
      { field: 'IsDiscontinued', header: 'Is Discontinued' }
  ];
  this.isShowLoader= true;

      this.prodService.getallproducts().subscribe(res =>{
            this.ProductDetails = <product[]>res;
      },err => {
        console.log("An Error Occured while Getting All Products" + err);
      },()=>{
        console.log("Request has Completed for Get All Products");
        this.isShowLoader =false;
      });
  }

  Clear(){
    this.ProductData = <product>{};
  }
  Add(){
    this.prodService.AddProduct(this.ProductData).subscribe(res =>{
      const issucess = <boolean>res;
      if(issucess){
        
      }
},err => {
  console.log("An Error Occured while Getting All Products" + err);
},()=>{
  console.log("Request has Completed for Get All Products");
  this.isShowLoader =false;
});
  }

}

