import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer, NgClass } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-promotional-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promotional-bar.component.html',
  styleUrl: './promotional-bar.component.scss',
  animations: [
    trigger('textFade', [
      transition(':enter', [ // entry animation
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [ // exit animation
        animate('500ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class PromotionalBarComponent {
  @Input() messages: string[] = ["Free Shipping on Orders Over $50! Use Code: FREESHIP at Checkout.", "New Arrivals Just Landed! Explore the Latest Trends Now.", "Limited Time Offer: Buy One, Get One 50% Off on Select Items.", "Subscribe to Our Newsletter and Get 10% Off Your First Order.", "Flash Sale Alert! Up to 70% Off on Selected Products. Hurry, While Stocks Last!", "Exclusive Online Deal: Extra 15% Off on All Clearance Items."];
  private scrollSubs?: Subscription;
  index = 0;
  currentMessage: string | null = this.messages[0];
  intervalId: any;

  @ViewChild('navBarStrip') navBarStripRef!: ElementRef;
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private renderer: Renderer2
  ) {
    this.intervalId = setInterval(() => {
      this.index = (this.index + 1) % this.messages.length;
      this.currentMessage = null; // trigger leave animation
      setTimeout(() => {
        this.currentMessage = this.messages[this.index]; // trigger enter animation
      }, 500); // match leave animation duration
    }, 4000); // change every 4s
  }

  ngAfterViewInit(): void {
    this.initScrollListener();
  }

  private initScrollListener() {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    this.scrollSubs = fromEvent(window, 'scroll').subscribe({
      next: () => {
        if (window.scrollY > 10) {
          document.querySelectorAll('.header-margin').forEach((element) => {
            element.classList.add('navbar-margin');
          });
          this.renderer.addClass(this.navBarStripRef.nativeElement, 'hidden');
          this.renderer.removeClass(
            this.navBarStripRef.nativeElement,
            'visible'
          );
          return;
        }
        this.renderer.addClass(this.navBarStripRef.nativeElement, 'visible');
        this.renderer.removeClass(this.navBarStripRef.nativeElement, 'hidden');
        document.querySelectorAll('.header-margin').forEach((element) => {
          element.classList.remove('navbar-margin');
        });
      },
    });
  }

  ngOnDestroy() {
    this.scrollSubs?.unsubscribe();
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
