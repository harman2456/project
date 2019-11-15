import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LabComponent } from './form/lab4angular.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FrmComponent } from './form/form.component';
import { DatesheetComponent } from './datesheet/datesheet.component';
import { GradesComponent } from './grades/grades.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { StockComponent } from './stock/stock.component';
import { HttpModule } from '@angular/http';
import {HTTPServiceComponent } from './08-11-19.component';
@NgModule({
  declarations: [
    AppComponent,
    FrmComponent, 
    DatesheetComponent, 
    GradesComponent, 
    ProductComponent, 
    PricelistComponent, 
    StockComponent,
    LabComponent,
    HTTPServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule, FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:AppComponent
      },
       /*{
        path:'grades',
        component:GradesComponent
      },
      {
        path:'datesheet',
        component:DatesheetComponent
      }*/
      {
        path:'pricelist',
        component:AppComponent
      },
      {
        path:'stock',
        component:AppComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
