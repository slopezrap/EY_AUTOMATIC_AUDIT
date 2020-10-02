import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'projects/app-aap/src/app/components/home/home.component'
import { Page404Component } from 'projects/app-aap/src/app/components/page404/page404.component'


//Aqui es donde vamos a crear todas nuestras rutas
//Para crear una ruta es muy facil, a la raiz rutas le pasamos un
//objeto, indicandole la ruta y el componente que se renderizara
const routes: Routes = [
  { path:'', component: HomeComponent }, //Ruta con la pantalla inicio
  { path:'**', component: Page404Component}, //Ruta con las páginas 404 de no encontrado
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
