import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {

  http: HttpClient = inject(HttpClient);

  baseUrl = 'https://api.escuelajs.co/api/v1/products';

  // ✅ GET ALL
  getData() {
    return this.http.get<any[]>(this.baseUrl);
  }

  // ✅ GET BY ID
  getById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // ✅ POST
  createProduct(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  // ✅ PUT (UPDATE)
  updateProduct(id: number, data: any) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // ✅ DELETE (FIXED)
  deleteProduct(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}