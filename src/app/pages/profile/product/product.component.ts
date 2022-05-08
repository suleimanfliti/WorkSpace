import { Component, OnInit } from '@angular/core';
import { UserSerivce } from 'src/app/shared/services/user.service';
import { product } from 'src/app/shared/interfaces/product.type';
import { productservice } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: product[]=[];
  isLoaded: boolean = false;
  error: string;
  i: number = 1;

  constructor(
    private userService: UserSerivce,
    private productserv: productservice ) { }

  ngOnInit(): void {
this.products = this.productserv.getproducts();


}
  }



