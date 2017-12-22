import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'shared/models/order';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'view-order-modal',
  templateUrl: './view-order-modal.component.html',
  styleUrls: ['./view-order-modal.component.css']
})
export class ViewOrderModalComponent implements OnInit {
  @Input() orderId: string;
  @Input() order: Order;

  constructor(public activeModal: NgbActiveModal, private orderService: OrderService) {}

  async ngOnInit() {
    await this.orderService.getOrder(this.orderId).take(1).subscribe(i => this.order = i);
  }
}
