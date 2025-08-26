import {   
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import {
  CommonModule,
  DOCUMENT,
  isPlatformBrowser,
  isPlatformServer,
} from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { finalize } from 'rxjs';
import { Banner } from '../../../models/banners.model';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent implements OnInit, OnDestroy {
  isLoading!: boolean;
  @Input({ required: true }) banners!: Banner[];
  // banners: any;
  bannerList: any[] = [];
  bannerMobile: any[] = [];
  bannerTablet: any[] = [];

  @ViewChild('swiperContainerHeroCarousel')
  private swiperContainer!: ElementRef<any>;
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit() {
    this.fetchBanners();
  }

  onBannerClick(currentIndex: number) {
    const banner = this.bannerList[currentIndex];
    if (!banner.isClickable) return;
    window.open(banner.link, banner.isExternal ? "_blank" : "_self");
  }

  private initSwiperCarousel() {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    const swiperProps: SwiperOptions = {
      slidesPerView: 1,
      speed: 500,
      spaceBetween: 0,
      navigation: {
        prevEl: '.hero-carousel-arrow-prev',
        nextEl: '.hero-carousel-arrow-next',
      },
      followFinger: true,
      pagination: {
        el: '.hero-swiper-pagination ',
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
      },
    };
    Object.assign(this.swiperContainer.nativeElement, swiperProps);
    (<SwiperContainer>this.swiperContainer.nativeElement).initialize();
  }

  fetchBanners() {
    this.bannerList = this.mapBanners("desktop");
    this.bannerMobile = this.mapBanners("mobile");
    this.bannerTablet = this.mapBanners("tablet");
    if (this.bannerList.length && isPlatformBrowser(this.platformId)) {
      requestAnimationFrame(() => {
        this.initSwiperCarousel();
      });
    } else {
      const swiperContainer: SwiperContainer = this.document.querySelector(
        "#hero-swiper-container",
      )!;
      swiperContainer?.swiper?.update();
    }
  }

  private mapBanners(deviceType: 'desktop' | 'mobile' | 'tablet'): any[] {
    return this.banners.map((item: any, index: number) => ({
      imgUrl: item.files[deviceType].filePath.endsWith('undefined')
        ? `images/landing_banner_${deviceType}${index + 1}.png`
        : item.files[deviceType].filePath,
      link: item.link,
      isClickable: item.isClickable,
      isExternal: item?.isExternal || false,
    }));
  }

  ngOnDestroy() {}
}

