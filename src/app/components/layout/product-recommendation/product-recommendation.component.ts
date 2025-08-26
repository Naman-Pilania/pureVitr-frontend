import { Component, ContentChildren, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, Input, PLATFORM_ID, QueryList, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { arrow_next } from '../../../constants/svg/arrowNext';
import { arrow_prev } from '../../../constants/svg/arrowPrev';
import { DOCUMENT, isPlatformServer } from '@angular/common';
import { SwiperContainer } from 'swiper/element';
import { ProductCardComponent } from '../cards/product-card/product-card.component';

@Component({
  selector: 'app-product-recommendation',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './product-recommendation.component.html',
  styleUrl: './product-recommendation.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductRecommendationComponent {
  @Input() products: any[] = [];
  swiperProps!: SwiperOptions;
  readonly arrowNext = arrow_next;
  readonly arrowPrev = arrow_prev;
  @ViewChild('swiperContainer')
  private swiperContainer!: ElementRef<HTMLElement>;
  @ContentChildren('swiperSlide') swiperSlidesRef!: QueryList<any>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit(): void {
    this.initSwiperCarousel();
  }

  private initSwiperCarousel() {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    const swiperProps: SwiperOptions = {
      slidesPerView: 1.2,

      speed: 500,
      spaceBetween: 18,
      navigation: {
        prevEl: '.announcement-carousel-arrow--prev',
        nextEl: '.announcement-carousel-arrow--next',
      },
      loop: false,
      // autoplay: {
      //   delay: 10000,
      //   stopOnLastSlide: false,
      // },
      pagination: {
        el: '.announcement-swiper-pagination ',
        clickable: true,
      },
      followFinger: true,
      breakpoints: {
        1300: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
      },
    };
    this.swiperProps = swiperProps;

    const swiperContainer: SwiperContainer = this.document.querySelector(
      '#announcements-swiper-container'
    )!;
    Object.assign(swiperContainer, swiperProps);
    swiperContainer.initialize();
  }
}
