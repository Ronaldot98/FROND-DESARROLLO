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
<<<<<<< HEAD
import { EmpleadosComponent } from './components/crud/empleados/empleados.component';
=======
<<<<<<< HEAD
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FilterPipe } from './shared/filter.pipe';
import { CartComponent } from './components/cart/cart.component';
=======
>>>>>>> 681659f6004a85eab07669b989a7363909056d05
>>>>>>> c1986206bc7633b5cb7f811b55d53eb4c9166175


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
<<<<<<< HEAD
    EmpleadosComponent,
=======
<<<<<<< HEAD
    ProductItemComponent,
    FilterPipe,
    CartComponent,
=======
>>>>>>> 681659f6004a85eab07669b989a7363909056d05
>>>>>>> c1986206bc7633b5cb7f811b55d53eb4c9166175


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
