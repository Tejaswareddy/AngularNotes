import { Component, inject, signal } from '@angular/core';
import { ApiDataService } from '../../share/api-data';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})  
export class Product {
  apiData:ApiDataService = inject(ApiDataService);
  productData:any = signal([]);

  ngOnInit() {
    this.getDataService();
  }

  getDataService() {
    this.apiData.getData().subscribe({
      next: (ele) => {
        console.log(ele);

        this.productData.set(ele);
        console.log(this.productData);
      }
    })
  }
}
