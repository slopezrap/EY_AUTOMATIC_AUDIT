import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  public home = "Home";
  public ext_audit = "External Audit";
  public int_audit = "Internal Audit";
  public register = "Register";
  public profile = "Profile";
  public login = "Login";
  public logout = "Logout";
  ngOnInit(): void {
  }

}
