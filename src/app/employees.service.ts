import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }


  getEmployeesList(){
    return this.http.get('http://localhost:81/employees/list');
  }

  deleteEmployee(id){
    return this.http.get('http://localhost:81/employees/delete/'+id);
  }

  addEmployee(data){
    return this.http.post('http://localhost:81/employees/add',data);
  }
  editEmployee(data,id){
    return this.http.post('http://localhost:81/employees/edit/'+id,data);
  }


}
