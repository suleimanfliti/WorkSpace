import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { product } from "../interfaces/product.type";
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: product[] = [];
  token: string;

  constructor(private http: HttpClient) {}

  getproductAPI(){

    return this.http
    .get<{
      success: string;
      message: string;
      data: product[];
    }>('')
    .pipe(
      map(
        (resData) => {
          return resData.data;
        },
        tap((resData: product[]) => {
          this.products = resData;
        })
      )
    );

  }

  getproducts() {
    return this.products.slice();
  }

}
