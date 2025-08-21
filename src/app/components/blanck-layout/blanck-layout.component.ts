import { Component } from '@angular/core';
import { NavBarComponent } from "../Shared/nav-bar/nav-bar.component";
import { FooterComponent } from "../Shared/footer/footer.component";
import { HomeComponent } from "../Default/home/home.component";

@Component({
  selector: 'app-blanck-layout',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, HomeComponent],
  templateUrl: './blanck-layout.component.html',
  styleUrl: './blanck-layout.component.scss'
})
export class BlanckLayoutComponent {




  // Hero
 
}
