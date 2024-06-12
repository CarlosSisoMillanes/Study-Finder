import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Paginas/home/home.component';
import {CuestionarioComponent} from "./Paginas/cuestionario/cuestionario.component";
import {AsistenteComponent} from "./Paginas/asistente/asistente.component";
import {ForoComponent} from "./Paginas/foro/foro.component";
import {LoginComponent} from "./Paginas/login/login.component";
import {RegisterComponent} from "./Paginas/register/register.component";
import { PerfilComponent } from './Paginas/perfil/perfil.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'welcome', component: HomeComponent },
  { path: 'asistente', component: AsistenteComponent },
  { path: 'cuestionario', component: CuestionarioComponent },
  { path: 'foro', component: ForoComponent },
  { path: 'perfil', component: PerfilComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
