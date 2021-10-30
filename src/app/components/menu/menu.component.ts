import { Component, OnInit } from '@angular/core';
import {Productos} from 'src/app/models/productos.model';
import { ProductosService} from 'src/app/services/productos.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
}) 
export class MenuComponent implements OnInit {

  producto : Productos={
    
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: '',
    categoria: ''
  }


  consulta?: Productos[];




  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.getProducto();
  }


  getProducto(){
    this.productosService.getAll()
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
