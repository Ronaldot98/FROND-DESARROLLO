import { Component, OnInit } from '@angular/core';
import {Productos} from 'src/app/models/productos.model';
import { ProductosService} from 'src/app/services/productos.service';
import{ FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  producto : Productos={
    
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: '',
    categoria: ''
  }


  consulta?: Productos[];


  formProducto !:FormGroup;

  //desabilitar Formulario
  addBoton!: boolean;
  updateBoton!: boolean; 


  constructor(private formulario:FormBuilder, private productosService: ProductosService,private cartService : CartService) { }

  ngOnInit(): void {
    

    this.formProducto=this.formulario.group({
      nombre: [''],
      descripcion: [''],
      precio: [''],
      imagen: [''],
      categoria: ['']
    })

   
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

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }


  addProductos(): void {
    this.producto.nombre=       this.formProducto.value.nombre;
    this.producto.descripcion=  this.formProducto.value.descripcion;
    this.producto.precio=       this.formProducto.value.precio;
    this.producto.imagen=       this.formProducto.value.imagen;
    this.producto.categoria=    this.formProducto.value.categoria;


     this.productosService.create(this.producto)
       .subscribe(
         res => {
           console.log(res);

           alert("Registrado");
           this.formProducto.reset();
           let ref=document.getElementById("cancel");
           ref?.click();
           this.getProducto();
         },
         error => {
           console.log(error);
         });
   }


   ListProductos(row: any): void {
    this.addBoton = false;
    this.updateBoton = true;
    this.producto.id = row.id;

    this.formProducto.controls['nombre'].setValue(row.nombre);
    this.formProducto.controls['descripcion'].setValue(row.descripcion);
    this.formProducto.controls['precio'].setValue(row.precio);
    this.formProducto.controls['imagen'].setValue(row.imagen);
      this.formProducto.controls['categoria'].setValue(row.categoria);

  }


  UpdateProductos() {

    this.producto.nombre=     this.formProducto.value.nombre;
    this.producto.descripcion=this.formProducto.value.descripcion;
    this.producto.precio=     this.formProducto.value.precio;
    this.producto.imagen=     this.formProducto.value.imagen;
     this.producto.categoria=  this.formProducto.value.categoria;

    this.productosService.update(this.producto.id, this.producto).subscribe(
      (res) => {
        console.log(res);
        alert('Actualizado');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.getProducto();
      },
      (error) => {
        console.log(error);
        
      }
    );
  }

  Limpiar(): void {
    this.formProducto.reset();
    this.addBoton = true;
    this.updateBoton = false;
  }

  deleteProductos(row:any): void {
    this.productosService.delete(row.id)
      .subscribe(
        res => {
          console.log(res);
          alert("eliminado")
          this.getProducto();
        },
        error => {
          console.log(error);
        });
  }


}
