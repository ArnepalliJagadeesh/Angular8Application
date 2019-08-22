import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee/employee-details.component';
import { ProductDetailsComponent } from './product/product-details.component';
import { MEditComponent } from './ModelPopUps/medit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    ProductDetailsComponent,
    MEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
