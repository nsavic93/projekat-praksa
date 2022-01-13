import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekat-praksa';
  
  constructor(private loginService: LoginService) {}
  ngOnInit() {
    this.isLoggedIn();
  }
  isLoggedIn() {
    this.loginService.checkToken();
  }
  get isLog(): boolean {
    return this.loginService.isLog;
  }
  logOut() {
    this.loginService.logOut();
  }
}
