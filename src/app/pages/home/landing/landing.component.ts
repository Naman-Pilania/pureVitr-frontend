import { Component } from '@angular/core';
import { TopNavbarComponent } from '../../../components/layout/navbar/top-navbar/top-navbar.component';
import { RouterOutlet } from '@angular/router';
import { PromotionalBarComponent } from "../../../components/layout/navbar/promotional-bar/promotional-bar.component";
import { FooterComponent } from "../../../components/layout/footer/footer.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    TopNavbarComponent,
    RouterOutlet,
    PromotionalBarComponent,
    FooterComponent
],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
