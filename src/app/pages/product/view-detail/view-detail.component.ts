import { UtilityService } from './../../../services/utility.service';
import { Component, ContentChildren, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, Input, PLATFORM_ID, QueryList, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { arrow_next } from '../../../constants/svg/arrowNext';
import { arrow_prev } from '../../../constants/svg/arrowPrev';
import { CommonModule, DOCUMENT, isPlatformServer, NgFor, NgIf } from '@angular/common';
import { SwiperContainer } from 'swiper/element';
import { StarRatingComponent } from "../../../components/utility/star-rating/star-rating.component";
import { TextareaComponent } from "../../../components/utility/form/textarea/textarea.component";
import { FormControl, FormGroup } from '@angular/forms';
import { InputComponent } from '../../../components/utility/form/input/input.component';
import { VariantsComponent } from "../variants/variants.component";
import { DescriptionComponent } from "../description/description.component";
import { RegisterComponent } from "../../register/register/register.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { RelatedProductsComponent } from "../related-products/related-products.component";
import { FaqsComponent } from "../faqs/faqs.component";

@Component({
  selector: 'app-view-detail',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, InputComponent, VariantsComponent, DescriptionComponent, RegisterComponent, ReviewsComponent, RelatedProductsComponent, FaqsComponent],
  templateUrl: './view-detail.component.html',
  styleUrl: './view-detail.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ViewDetailComponent {
  swiperProps!: SwiperOptions;
  readonly arrowNext = arrow_next;
  readonly arrowPrev = arrow_prev;
  @ViewChild('swiperContainer')
  private swiperContainer!: ElementRef<HTMLElement>;
  @ContentChildren('swiperSlide') swiperSlidesRef!: QueryList<any>;

  addProductForm!: FormGroup;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    @Inject(DOCUMENT) private document: Document,
    protected utilityService: UtilityService,
  ) {}

  ngOnInit() {
    this.addProductForm = new FormGroup({
      review: new FormControl("1"),
    });
  }

  ngAfterViewInit(): void {
    this.initSwiperCarousel();
  }

  private initSwiperCarousel() {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    const swiperProps: SwiperOptions = {
      slidesPerView: 6,
      speed: 500,
      spaceBetween: 18,
      navigation: {
        prevEl: '.product-images-arrow--prev',
        nextEl: '.product-images-arrow--next',
      },
      loop: false,
      autoplay: {
        delay: 10000,
        stopOnLastSlide: false,
      },
      pagination: {
        el: '.announcement-swiper-pagination ',
        clickable: true,
      },
      followFinger: true,
      breakpoints: {
        1300: {
          slidesPerView: 5,
          spaceBetween: 18,
        },
        1000: {
          slidesPerView: 5,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 18,
        },
        640: {
          slidesPerView: 6,
          spaceBetween: 18,
        },
      },
    };
    this.swiperProps = swiperProps;

    const swiperContainer: SwiperContainer = this.document.querySelector(
      '#product-images-swiper-container'
    )!;
    Object.assign(swiperContainer, swiperProps);
    swiperContainer.initialize();
  }
}
