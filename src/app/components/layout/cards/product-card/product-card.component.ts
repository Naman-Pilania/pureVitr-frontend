import { Component } from '@angular/core';
import { StarRatingComponent } from "../../../utility/star-rating/star-rating.component";
import { RouterLink } from "@angular/router";
import { routes } from '../../../../constants/routes';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [StarRatingComponent, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  readonly routes = routes;
}
