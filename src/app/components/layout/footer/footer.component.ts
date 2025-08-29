import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../constants/routes';
import { Subject, takeUntil } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { socialLinks } from '../../../constants/social-links';
import { ApiService } from '../../../services/api.service';
import { MatIcon } from '@angular/material/icon';
import { instaIcon } from '../../../constants/svg/insta.svg';
import { facebookIcon } from '../../../constants/svg/facebook.svg';
import { twitterXIcon } from '../../../constants/svg/twiiter-x.svg';
import { SafeHtmlPipe } from '../../../pipes/safe-html.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, DecimalPipe, MatIcon, SafeHtmlPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  routes = routes;
  readonly socialLinks = socialLinks;
  readonly instagramIcon = instaIcon;
  readonly facebookIcon = facebookIcon;
  readonly twitterXIcon = twitterXIcon;
  public currentYear = 2025;
  public visitorCount: number = 0;
  private destroy$ = new Subject<boolean>();

  constructor(
    private router: Router, 
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
    this.updateVisitorCount();
    this.getVisitorCount();
  }

  onGetStartedClick() {
    // this.router.navigateByUrl(`/${routes.account}/${routes.login}`);
  }

  getVisitorCount() {
    // this.apiService
    //   .getVisitorCount()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((res) => {
    //     this.visitorCount = res.visitors;
    //   });
  }

  updateVisitorCount() {
    // this.apiService
    //   // .updateVisitorCount()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((res) => {});
  }

  redirectToIndiaAI() {
    window.open('https://indiaai.gov.in/', '_blank');
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
