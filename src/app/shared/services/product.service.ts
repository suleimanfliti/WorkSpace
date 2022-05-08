import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { product } from "../interfaces/product.type";
import { map, tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class productservice{
  products: product[] = [];
  token: string;

  constructor() {}



  getproducts() {
   this.products =[
       new product(1,'school1',88),
       new product(1,'school2',77),
       new product(1,'school3',99),
       new product(1,'school4',44),

   ];
   return this.products;
  }

}