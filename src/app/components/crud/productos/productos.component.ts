import { Component, OnInit } from '@angular/core';

import {Productos} from 'src/app/models/productos.model';
import { ProductosService} from 'src/app/services/productos.service';
import{ FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  consulta?: Productos[];

  constructor(private formulario:FormBuilder,private ProductosService: ProductosService) { }

  ngOnInit(): void {

   this.getDireccion();
  }


  getDireccion(){
    this.ProductosService.getAll()
    .subscribe(
      data => {
        this.consulta = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
