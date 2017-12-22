import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-4-data-table/dist';
import { AngularFireAuthModule } from 'angularfire2/auth/auth.module';
import { AngularFireDatabaseModule } from 'angularfire2/database/database.module';
import { CustomFormsModule } from 'ng2-validation/dist';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { ViewOrderModalComponent } from './components/view-order-modal/view-order-modal.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    ViewOrderModalComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot().ngModule,
    ProductCardComponent,
    ProductQuantityComponent,
    ViewOrderModalComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ],
  entryComponents: [ViewOrderModalComponent]
})
export class SharedModule { }
