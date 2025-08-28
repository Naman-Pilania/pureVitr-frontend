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

@Component({
  selector: 'app-view-detail',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, InputComponent],
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
      slidesPerView: 1.2,
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
      '#product-images-swiper-container'
    )!;
    Object.assign(swiperContainer, swiperProps);
    swiperContainer.initialize();
  }
}
