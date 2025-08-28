import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Pipe, PipeTransform, PLATFORM_ID } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import DOMPurify from 'dompurify';

@Pipe({
  name: 'safeHtml',
  standalone: true
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private domSanitize: DomSanitizer
  ) {}
  transform(value: any, type: 'html' | 'url' | 'style' = 'html') {
    if (!value) {
      return 'N.A.';
    }

    if (isPlatformBrowser(this.platformId)) {
      value = DOMPurify.sanitize(value);
    }

    switch (type) {
      case 'html':
        return this.domSanitize.bypassSecurityTrustHtml(value);
      case 'url':
        return this.domSanitize.bypassSecurityTrustResourceUrl(value);
      case 'style':
        return this.domSanitize.bypassSecurityTrustStyle(value);
      default:
        throw new Error(`Invalid sanitization type: ${type}`);
    }
  }

}
