import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service123 {
  getMsg(){
    return "hello Service";
  }

  dataService:string = "hello Inject method";
}
