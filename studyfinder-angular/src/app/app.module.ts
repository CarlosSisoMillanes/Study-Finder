import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './componentes/component/component.component';
import { PaginaComponent } from './Paginas/pagina/pagina.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { LoginComponent } from './Paginas/login/login.component';
import { RegisterComponent } from './Paginas/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    PaginaComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
