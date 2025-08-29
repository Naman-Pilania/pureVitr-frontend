import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../components/layout/cards/product-card/product-card.component';

@Component({
  selector: 'app-related-products',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.scss'
})
export class RelatedProductsComponent {

}
