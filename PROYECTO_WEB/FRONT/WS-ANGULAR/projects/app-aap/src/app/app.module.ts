


//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgxElectronModule } from 'ngx-electron';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Page404Component } from './components/page404/page404.component';
import { ExternalAuditComponent } from './components/audit/external-audit/external-audit.component';
import { FFPPComponent } from './components/audit/external-audit/ffpp/ffpp.component'; 

//Servicios
import { UploadFileService } from './services/audit/external-audit/ffpp/upload-file.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    NavbarComponent,
    Page404Component,
    ExternalAuditComponent,
    FFPPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UploadFileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
