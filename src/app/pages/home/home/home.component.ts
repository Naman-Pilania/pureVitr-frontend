import { Component } from '@angular/core';
import { CarouselComponent } from "../../../components/layout/carousel/carousel.component";
import { homeBanners } from '../../../constants/banners.constant';
import { ProductRecommendationComponent } from '../../../components/layout/product-recommendation/product-recommendation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, ProductRecommendationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly homeBanners = homeBanners;
}
