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
  Name:string ="Jagadeesh";
  ngOnInit() {
// Id] ,[ProductName] ,[SupplierId] ,[UnitPrice] ,[Package] ,[IsDiscontinued -->
    this.cols = [
      { field: 'Id', header: 'ID' },
      { field: 'ProductName', header: 'Product Name' },
      { field: 'SupplierId', header: 'Supplier ID' },
      { field: 'UnitPrice', header: 'Unit Price' },
      { field: 'Package', header: 'Package' },
      { field: 'IsDiscontinued', header: 'Is Discontinued' }
  ];

      this.prodService.getallproducts().subscribe(res =>{
            this.ProductDetails = <product[]>res;
      },err => {
        console.log("An Error Occured while Getting All Products" + err);
      },()=>{
        console.log("Request has Completed for Get All Products");
      });
  }

}

