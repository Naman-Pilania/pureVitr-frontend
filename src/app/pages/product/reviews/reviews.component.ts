import { Component } from '@angular/core';
import { ReviewCardComponent } from "../../../components/layout/cards/review-card/review-card.component";

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReviewCardComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

}
