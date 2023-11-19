import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    // this.productService.getProducts().subscribe((product) => {
    //   console.log('Http request is successful');
    //   console.log(product);
    // }, (error) => {
    //   console.log('Http request is not successful')
    //   console.error(error);
    // });

    this.productService.getProducts().subscribe({
      next: (product) => {
        console.log('Http request is successful');
        console.log(product);
      },
      error: (error) => {
        console.log('Http request is not successful')
        console.error(error);
      },
      complete: () => console.info('complete')
    });

  }

}
