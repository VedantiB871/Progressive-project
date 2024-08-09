import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
<<<<<<< HEAD

const routes: Routes = [];
=======
import { TransactionComponent } from "./components/transaction/transaction.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CustomerComponent } from "./components/customer/customer.component";
import { AccountComponent } from "./components/account/account.component";
import { EditCustomerComponent } from "./components/customeredit/customeredit.component";
import { EditAccountComponent } from "./components/accountedit/accountedit.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "customer", component: CustomerComponent },
  { path: "account", component: AccountComponent },
  { path: "transaction", component: TransactionComponent },
  { path: "customer/edit", component: EditCustomerComponent },
  { path: "account/edit", component: EditAccountComponent },
 
];
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankRoutingModule {}
