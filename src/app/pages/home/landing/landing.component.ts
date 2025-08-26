import { Component } from '@angular/core';
import { TopNavbarComponent } from '../../../components/layout/top-navbar/top-navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    TopNavbarComponent,
    RouterOutlet
],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
