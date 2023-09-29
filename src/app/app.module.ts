import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaUtentiHrComponent } from './lista-utenti-hr/lista-utenti-hr/lista-utenti-hr.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, ListaUtentiHrComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
