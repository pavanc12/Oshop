import { ViewOrderModalComponent } from '../../../shared/components/view-order-modal/view-order-modal.component';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders$;
  orderId: string;
  modalOptions: NgbModalOptions = {};
  constructor(private orderService: OrderService, private modalService: NgbModal) {}

  ngOnInit() {
    this.orders$ = this.orderService.getOrders();
  }

  async viewOrder(orderId) {
    this.modalOptions.backdrop = 'static';
    this.modalOptions.keyboard = false;
    this.modalOptions.size = 'lg';
    const modalRef = this.modalService.open(ViewOrderModalComponent, this.modalOptions);
    modalRef.componentInstance.orderId = orderId;
  }
}
