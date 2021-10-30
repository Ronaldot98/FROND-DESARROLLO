import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Productos} from 'src/app/models/productos.model';
import { ProductosService} from 'src/app/services/productos.service';

=======
>>>>>>> 681659f6004a85eab07669b989a7363909056d05
>>>>>>> c1986206bc7633b5cb7f811b55d53eb4c9166175

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
<<<<<<< HEAD
=======
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
>>>>>>> c1986206bc7633b5cb7f811b55d53eb4c9166175
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
>>>>>>> 681659f6004a85eab07669b989a7363909056d05
>>>>>>> c1986206bc7633b5cb7f811b55d53eb4c9166175
}
