import { Component, OnInit, AfterViewInit } from '@angular/core';
import { product } from '../Models/product';
import { ProductServiceService } from '../Service/product-service.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  EmailAddress: string = "jagadeesharnepalli@gmail.com";
  UserName: string = "";
  ProductData: product = <product>{};
  LstNames: string[] = <string[]>[];
  isShowEditPopUp = false;
  constructor(private prodService: ProductServiceService) { }

  ngOnInit() {

    this.UserName = "jagadeesh";

    this.ProductData.Id = 1;
    this.ProductData.IsDiscontinued = 0;
    this.ProductData.ProductName = "Phone";
    this.ProductData.SupplierId = 3;
    this.ProductData.UnitPrice = 10.00;

    this.LstNames.push("Jagadeesh");
    this.LstNames.push("Sowjanya");
    this.LstNames.push("Yogi");
    this.LstNames.push("Kanna");
    this.LstNames.push("Hari");

  }
  OnPopEditClick(PopData:any){
      if(PopData.isSave){
          console.log(PopData);
      }else{
        this.isShowEditPopUp = false;
      }
  }

  OnSubmitClicked() {
    if (String(this.ProductData.Id) == '') {
      alert("please enter ID");
      return false;
    }
    this.prodService.AddProduct(this.ProductData).subscribe(res => {
      if (res) {
        alert("Prodcut added Sucessfully");
      } else {
        alert("Product adding failed");
      }

    }, err => { console.log("Error Occured"); }, () => { console.log("Product Add service call completed") });

    console.log(this.ProductData);
  }
}
