import { Component } from '@angular/core';
import { StarRatingComponent } from "../../../utility/star-rating/star-rating.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [StarRatingComponent, MatIconModule],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent {

}
