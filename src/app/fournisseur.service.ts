import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http:HttpClient) { }


  getFournisseurList(){
    return this.http.get('http://localhost:81/fournisseurs/list');
  }
  
  addNewFournisseur(data){
    return this.http.post('http://localhost:81/fournisseurs/add',data);
  }
  
}
