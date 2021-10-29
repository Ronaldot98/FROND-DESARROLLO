import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Productos} from '../models/productos.model';


const baseUrlproductos= 'http://localhost:3000/metasports.com/producto';

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
