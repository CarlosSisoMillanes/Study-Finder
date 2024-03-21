import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './Paginas/pagina/pagina.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { LoginComponent } from './Paginas/login/login.component';
import { RegisterComponent } from './Paginas/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { PerfilComponent } from './Paginas/perfil/perfil.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './Componentes/header/header.component';
import {HomeComponent} from "./Paginas/home/home.component";
import { ForoComponent } from './Paginas/foro/foro.component';
import { AsistenteComponent } from './Paginas/asistente/asistente.component';
import { CuestionarioComponent } from './Paginas/cuestionario/cuestionario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    HeaderComponent,
    HomeComponent,
    ForoComponent,
    AsistenteComponent,
    CuestionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
