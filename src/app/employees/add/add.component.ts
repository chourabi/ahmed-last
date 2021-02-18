import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm = new FormGroup({
    firstName: new FormControl('1'),
    lastName: new FormControl(''),
    emailId: new FormControl(''),
    
  })
  constructor(private emp:EmployeesService) { }

  ngOnInit(): void {
  }


  save(){
    this.emp.addEmployee (this.addForm.value).subscribe((data:any)=>{
      alert(data.message);
    })
  }

}
