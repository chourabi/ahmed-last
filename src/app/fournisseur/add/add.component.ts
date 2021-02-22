import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FournisseurService } from 'src/app/fournisseur.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm = new FormGroup({
    title: new FormControl("",Validators.required)
  })
  constructor(private fourni:FournisseurService) { }

  ngOnInit(): void {
  }

  addFournisseur(){
    this.fourni.addNewFournisseur(this.addForm.value).subscribe((data)=>{
      console.log(data);
      
    })
  }

}
