import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {Productos} from 'src/app/models/productos.model';
import { ProductosService} from 'src/app/services/productos.service';

=======
>>>>>>> 681659f6004a85eab07669b989a7363909056d05

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
<<<<<<< HEAD
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




=======
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> 681659f6004a85eab07669b989a7363909056d05
}
