import { Component } from '@angular/core';
import { StarRatingComponent } from "../../../utility/star-rating/star-rating.component";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

}
