import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './componentes/component/component.component';
import { PaginaComponent } from './Paginas/pagina/pagina.component';
import { HomeComponent } from './Paginas/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    PaginaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
