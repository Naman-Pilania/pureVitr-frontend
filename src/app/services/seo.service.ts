import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Meta, Title } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private renderer: Renderer2;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    private title: Title,
    private meta: Meta,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setPageTitle(title: string) {
    this.title.setTitle(title);

    const isOGTitleTagExists = !!this.meta.getTag('name="og:title"');

    this.meta[isOGTitleTagExists ? "updateTag" : "addTag"]({
      name: "og:title",
      content: title,
    });
  }

  setPageDescription(description: string) {
    const isDescTagExists = !!this.meta.getTag('name="description"');
    const isOGDescTagExists = !!this.meta.getTag('name="og:description"');

    this.meta[isDescTagExists ? "updateTag" : "addTag"]({
      name: "description",
      content: description,
    });

    this.meta[isOGDescTagExists ? "updateTag" : "addTag"]({
      name: "og:description",
      content: description,
    });
  }

  setCanonicalUrl(url: string) {
    this.removeAllCanonicalLinks();

    const canonicalLinkElm: HTMLLinkElement =
      this.renderer.createElement("link");
    this.renderer.setAttribute(canonicalLinkElm, "rel", "canonical");
    this.renderer.setAttribute(canonicalLinkElm, "href", url);
    this.renderer.appendChild(this.document.head, canonicalLinkElm);
  }

  removeAllCanonicalLinks() {
    this.document
      .querySelectorAll('link[rel="canonical"]')
      ?.forEach((link) => link.remove());
  }
  
}
