import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BankRoutingModule } from "./bank-routing.module";
<<<<<<< HEAD
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
=======
import { TransactionComponent } from "./components/transaction/transaction.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AuthModule } from "../auth/auth.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AccountComponent } from './components/account/account.component';
import {NavBarComponent} from '../navbar/navbar.component';
import { EditCustomerComponent } from "./components/customeredit/customeredit.component";
import { EditAccountComponent } from "./components/accountedit/accountedit.component";
@NgModule({
  declarations: [TransactionComponent, DashboardComponent, CustomerComponent, AccountComponent,EditCustomerComponent,NavBarComponent,EditAccountComponent],
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f
  imports: [
    CommonModule,
    BankRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
<<<<<<< HEAD
  ],
  exports: [
    
  ]
=======
    AuthModule
  ],
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f
})
export class BankModule {}
