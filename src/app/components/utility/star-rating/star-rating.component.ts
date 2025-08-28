import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import DOMPurify from 'dompurify';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  ratingValue!: number;
  starRatingSafeHTML!: SafeHtml;
  @Input() starSize: 'fa-xs' | '' = 'fa-xs';
  @Input({ required: true }) set rating(value: number) {
    const maxRating = 5;
    const roundedRating = Math.round(value * 2) / 2 || 0; // Round to nearest 0.5
    let starRatingHTML = '';

    // Generate full star icons
    for (let i = 0; i < Math.floor(roundedRating); i++) {
      starRatingHTML += `<i class="star-warning fa-solid fa-star ${this.starSize} "></i>`;
    }

    // Generate half star icon if needed
    if (roundedRating % 1 !== 0) {
      starRatingHTML += `<i class="star-warning fa-regular fa-star-half-stroke ${this.starSize} "></i>`;
    }

    // Generate empty star icons for the remaining space
    for (let i = Math.ceil(roundedRating); i < maxRating; i++) {
      starRatingHTML += `<i class="star-warning fa-regular fa-star ${this.starSize} "></i>`;
    }

    this.ratingValue = value;
    this.starRatingSafeHTML = this.domSanitizer.bypassSecurityTrustHtml(
      isPlatformServer(this.platformId)
        ? starRatingHTML
        : DOMPurify.sanitize(starRatingHTML)
    );
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private domSanitizer: DomSanitizer
  ) {}
}
