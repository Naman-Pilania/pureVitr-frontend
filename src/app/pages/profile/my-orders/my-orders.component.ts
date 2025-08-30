import { Component } from '@angular/core';
import { OrderCardComponent } from '../../../components/layout/cards/order-card/order-card.component';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [OrderCardComponent],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss'
})
export class MyOrdersComponent {

}
