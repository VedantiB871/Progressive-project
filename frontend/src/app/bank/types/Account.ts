import { Customer } from "./Customer";
export class Account {
<<<<<<< HEAD
 
=======
 accountId?: number;
 customer: Customer;
 balance: number;

  constructor(data: any) {
    // if(this.accountId)
    this.accountId = data?.accountId;
    this.customer = data?.customer;
    this.balance = data?.balance !== undefined ? data.balance : 0;
}
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f
}