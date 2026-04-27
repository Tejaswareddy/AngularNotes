import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {

  http:HttpClient = inject(HttpClient);

  getData() {
    return this.http.get('https://api.escuelajs.co/api/v1/products');
  }


  sendData(data: any) {
    return this.http.post('https://api.escuelajs.co/api/v1/products/' , data)
  }

  deleteData() {
    return this.http.delete('https://api.escuelajs.co/api/v1/products/1');
  }


  sendFormData(data: any) {
    return this.http.post('https://api.escuelajs.co/api/v1/users' , data)
  }
}