import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Productos} from '../models/productos.model';


<<<<<<< HEAD
const baseUrlproductos= 'http://localhost:3000/metasports.com/producto';
=======
<<<<<<< HEAD
const baseUrlproductos= 'https://desarroll-web.herokuapp.com/metasports.com/producto';
=======
const baseUrlproductos= 'http://localhost:3000/metasports.com/producto';
>>>>>>> 681659f6004a85eab07669b989a7363909056d05
>>>>>>> c1986206bc7633b5cb7f811b55d53eb4c9166175

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  //CATEGORIA
  getAll(): Observable<Productos[]> {
   return this.http.get<Productos[]>(baseUrlproductos);
 }

 get(id: any): Observable<Productos> {
   return this.http.get(`${baseUrlproductos}/${id}`);
 }

 create(data: any): Observable<any> {
   return this.http.post(baseUrlproductos, data);
 }

 update(id: any, data: any): Observable<any> {
   return this.http.patch(`${baseUrlproductos}/${id}`, data);
 }

 delete(id: any): Observable<any> {
   return this.http.delete(`${baseUrlproductos}/${id}`);
 }
}
