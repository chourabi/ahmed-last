import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/fournisseur.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  fournisseurs:any = [];
  constructor(private fournisseur:FournisseurService) { }

  ngOnInit(): void {
    this.getFournisseurList();
  }

  getFournisseurList(){
    this.fournisseur.getFournisseurList().subscribe((data)=>{
      this.fournisseurs = data;
    })
  }

}
