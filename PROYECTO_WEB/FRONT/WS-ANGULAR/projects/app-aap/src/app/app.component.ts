import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APP-AAP';
  public hideElement = false;

  constructor(private router: Router){
    //Comprobamos en la ruta que estamos para ver si mostramos o no el elemento hero
    this.router.events.subscribe(event =>{//devuelve event
      if (event instanceof NavigationEnd){
        if (event.url.match('/user/') || event.url.match('/audit/') ){
          this.hideElement = true;
        }
        else{
          this.hideElement = false;        
        }
      }
    });
  }
  
}