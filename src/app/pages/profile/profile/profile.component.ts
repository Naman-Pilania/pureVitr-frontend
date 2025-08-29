import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { routes } from './../../../constants/routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  readonly routes = routes;
}
