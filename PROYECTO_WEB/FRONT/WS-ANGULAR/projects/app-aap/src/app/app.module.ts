import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NgxElectronModule } from 'ngx-electron';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Page404Component } from './components/page404/page404.component';
import { ExternalAuditComponent } from './components/audit/external-audit/external-audit.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    NavbarComponent,
    Page404Component,
    ExternalAuditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
