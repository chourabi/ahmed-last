import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  addForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailId: new FormControl(''),
    
  })

  employee:any = {};
  constructor(private emp:EmployeesService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.route);

    this.employee = this.route.snapshot.params;

    console.log(this.employee);

    this.addForm.setValue({
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      emailId: this.employee.emailId,
    })
    
    
  }


  save(){
    this.emp.editEmployee(this.addForm.value,this.employee.id).subscribe((data:any)=>{
     
      alert(data.message);
      window.history.back();
      
    })
  }

}
