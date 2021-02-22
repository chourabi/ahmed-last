import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products:any = [];

  constructor(private prod:ProductsService) { }

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList(){
    this.prod.getProductsList().subscribe((data)=>{
      console.log(data);

      this.products = data;
      
    })
  }

}
