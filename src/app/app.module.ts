import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './components/angular-material/angular-material.module';
import { NavegacionComponent } from './components/menu/navegacion/navegacion.component';
import { InicioComponent } from './components/menu/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { CrudComponent } from './components/crud/crud.component';
import { NavComponent } from './components/crud/nav/nav.component';
import { DireccionComponent } from './components/crud/direccion/direccion.component';
import { SucursalesComponent } from './components/crud/sucursales/sucursales.component';
import { ProductosComponent } from './components/crud/productos/productos.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FilterPipe } from './shared/filter.pipe';
import { CartComponent } from './components/cart/cart.component';

import { EmpleadosComponent } from './components/crud/empleados/empleados.component';
import { UsuarioComponent } from './components/crud/usuario/usuario.component';
<<<<<<< HEAD
import { ClienteComponent } from './components/crud/cliente/cliente.component';
=======
>>>>>>> e13f292acc0253f9c725455c6d5a8ca4f3f3bc8b


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavegacionComponent,
    InicioComponent,
    LoginComponent,
    CrudComponent,
    NavComponent,
    DireccionComponent,
    SucursalesComponent,
    ProductosComponent,
    EmpleadosComponent,
    ProductItemComponent,
    FilterPipe,
    CartComponent,
    UsuarioComponent,
<<<<<<< HEAD
    ClienteComponent

=======
    
>>>>>>> e13f292acc0253f9c725455c6d5a8ca4f3f3bc8b


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
