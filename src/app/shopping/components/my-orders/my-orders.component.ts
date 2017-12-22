import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ViewOrderModalComponent } from '../../../shared/components/view-order-modal/view-order-modal.component';

import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$;
  orderId: string;
  modalOptions: NgbModalOptions = {};
  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private modalService: NgbModal) {}

  ngOnInit() {
    this.orders$ = this.authService.user$.switchMap(user => this.orderService.getOrdersByUser(user.uid));
  }

  async viewOrder(orderId) {
    this.modalOptions.backdrop = 'static';
    this.modalOptions.keyboard = false;
    this.modalOptions.size = 'lg';
    const modalRef = this.modalService.open(ViewOrderModalComponent, this.modalOptions);
    modalRef.componentInstance.orderId = orderId;
  }
}
