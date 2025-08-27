import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { isPlatformBrowser, NgClass, NgStyle } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../../../constants/routes';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [
    NgClass,
    MatMenuModule,
    RouterLink,
    RouterLink,
    RouterLinkActive,
    NgStyle,
],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.scss'
})
export class TopNavbarComponent implements OnInit {
  isOpened = false;
  showDropdownList = false;
  dropdownStyle: { [key: string]: string | number } = {};
  logoPath = 'images/purevitr-logo.png';
  readonly routes = routes;

  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setLogo();
      this.observeThemeChanges();
    }
  }
  setLogo() {
    const isDarkMode = document?.body?.classList.contains('dark');
    this.logoPath = isDarkMode
      ? 'images/ai-kosh-white-logo.svg' // Dark Mode Logo
      : 'images/ai-kosh-header-logo.svg'; // Light Mode Logo
  }
  observeThemeChanges() {
    const observer = new MutationObserver(() => this.setLogo());
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  openPDF() {
    window.open('assets/INDIA.pdf', '_blank');
  }

  onDropdownClick() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 992) {
      this.showDropdownList = false;
      return;
    }
    this.showDropdownList = !this.showDropdownList;
  }

  showDropdown() {
    return this.dropdownStyle;
  }
}
