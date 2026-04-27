import { Component, inject, signal } from '@angular/core';
import { ApiDataService } from '../../share/api-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrl: './product.css',
  imports : [FormsModule]
})
export class Product {

  apiData = inject(ApiDataService);

  productData = signal<any[]>([]);
  selectedProduct: any = null;

  ngOnInit() {
    this.getDataService();
  }

  
  getDataService() {
    this.apiData.getData().subscribe({
      next: (res) => {
        this.productData.set(res);
      }
    });
  }

  
  addProduct() {
    const newProduct = {
      title: 'New Product',
      price: 200,
      description: 'Demo product',
      categoryId: 1,
      images: ['https://placeimg.com/640/480/any']
    };

    this.apiData.createProduct(newProduct).subscribe({
      next: () => this.getDataService()
    });
  }

  
  deleteProduct(id: number) {
    this.apiData.deleteProduct(id).subscribe({
      next: () => this.getDataService()
    });
  }

  
  selectProduct(product: any) {
    this.selectedProduct = { ...product };
  }

  
  updateProduct() {
    this.apiData.updateProduct(this.selectedProduct.id, this.selectedProduct)
      .subscribe({
        next: () => {
          this.getDataService();
          this.selectedProduct = null;
        }
      });
  }
}