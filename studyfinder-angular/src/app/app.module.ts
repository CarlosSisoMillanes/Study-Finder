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

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
