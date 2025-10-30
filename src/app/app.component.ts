import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { EmplistComponent } from "./emplist/emplist.component";
import { AccountComponent } from "./account/account.component";
import { EmpaddComponent } from "./empadd/empadd.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstprj';
}
