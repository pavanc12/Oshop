import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../shared/services/order.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  private orderId: string;
  order$;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private orderService: OrderService) {
    this.orderId = this.route.snapshot.paramMap.get('id');
  }

  async ngOnInit() {
    this.order$ = await this.orderService.getOrder(this.orderId);

  }

  manageOrders() {
    this.router.navigate(['/my/orders']);
  }

}
