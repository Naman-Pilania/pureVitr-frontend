import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser, isPlatformServer, NgClass } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-promotional-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './promotional-bar.component.html',
  styleUrl: './promotional-bar.component.scss'
})
export class PromotionalBarComponent {
  private scrollSubs?: Subscription;

  @ViewChild('navBarStrip') navBarStripRef!: ElementRef;
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private renderer: Renderer2
  ) {}

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
}
