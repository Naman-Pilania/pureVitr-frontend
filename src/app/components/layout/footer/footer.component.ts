import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductCardComponent } from "../cards/product-card/product-card.component";
import { ProductRecommendationComponent } from "../product-recommendation/product-recommendation.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ProductCardComponent, ProductRecommendationComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FooterComponent {

}
