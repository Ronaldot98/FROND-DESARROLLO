import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';
import { DireccionComponent } from './components/crud/direccion/direccion.component';
import { ProductosComponent } from './components/crud/productos/productos.component';
import { SucursalesComponent } from './components/crud/sucursales/sucursales.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent} from './components/menu/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { EmpleadosComponent } from './components/crud/empleados/empleados.component';
import { UsuarioComponent } from './components/crud/usuario/usuario.component';
const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent,children:[
    {path: 'inicio', component: InicioComponent},
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'crud', component: CrudComponent,children:[

    {path: 'direccion', component: DireccionComponent},
    {path: 'sucursales', component: SucursalesComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'empleados', component: EmpleadosComponent},
    {path: 'usuarios', component: UsuarioComponent},

  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
