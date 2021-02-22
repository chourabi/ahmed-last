import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FournisseurService } from 'src/app/fournisseur.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  fournisseurs:any = [];

  addForm = new FormGroup({
    title: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    fournisseur: new FormControl('',Validators.required),
    
  })
  constructor(private fourni:FournisseurService,private prod:ProductsService) { }

  ngOnInit(): void {
    this.getFournisseurList();
  }


  getFournisseurList(){
    this.fourni.getFournisseurList().subscribe((data)=>{
      this.fournisseurs = data;
    })
}


save(){
  this.prod.addNewproduct(this.addForm.value).subscribe((data)=>{
    console.log(data);
    
  })
}


}