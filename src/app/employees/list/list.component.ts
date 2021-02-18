import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees:any = [];
  constructor(private emp:EmployeesService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.emp.getEmployeesList().subscribe((data)=>{
      console.log(data);
      this.employees = data;
      
    })
  }


  deleteEmployee(id){
    this.emp.deleteEmployee(id).subscribe((data)=>{
      console.log(data);

      this.getEmployees();
    })
    

    
  }




  edit(e){
    console.log(e);

    this.router.navigate(['/employees/edit',e])
    
  }
}
