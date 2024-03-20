import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Paginas/login/login.component";
import {RegisterComponent} from "./Paginas/register/register.component";
import {PerfilComponent} from "./Paginas/perfil/perfil.component";
import {HomeComponent} from "./Paginas/home/home.component";
import { CuestionarioComponent } from './Paginas/cuestionario/cuestionario.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cuestionario', component: CuestionarioComponent },


  { path: '',   redirectTo: '/login', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
