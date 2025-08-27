import { Component } from '@angular/core';
import { CarouselComponent } from "../../../components/layout/carousel/carousel.component";
import { homeBanners } from '../../../constants/banners.constant';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly homeBanners = homeBanners;
}
