import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfolegalComponent } from './components/infolegal/infolegal.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HablemosComponent } from './components/pages/hablemos/hablemos.component';
import { ProductosComponent } from './components/pages/productos/productos.component';
import { CalidadComponent } from './components/pages/calidad/calidad.component';
import { QuienesComponent } from './components/pages/quienes/quienes.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import { LinksComponent } from './components/pages/links/links.component';
import { NutricionClinicaAdultaComponent } from './components/pages/nutricion-clinica-adulta/nutricion-clinica-adulta.component';
import { SustentaneutroComponent } from './components/pages/sustentaneutro/sustentaneutro.component';

@NgModule({
  declarations: [
  AppComponent,
  NavbarComponent,
  HomeComponent,
  HablemosComponent,
  FooterComponent,
  InfolegalComponent,
  ProductosComponent,
  CalidadComponent,
  QuienesComponent,
  ContactoComponent,
  LinksComponent,
  QuienesComponent,
  NutricionClinicaAdultaComponent,
  SustentaneutroComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
