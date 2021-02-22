import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }


  getProductsList(){
    return this.http.get('http://localhost:81/products/list');
  }
  
  addNewproduct(data){
    return this.http.post('http://localhost:81/products/add',data);
  }
}
