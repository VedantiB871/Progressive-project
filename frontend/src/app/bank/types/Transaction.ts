
import { Account } from './Account';

export class Transaction {
<<<<<<< HEAD
  
=======
  amount: number;
  transactionDate?:Date;
  transactionType:string;
  accounts?:Account;
  constructor(data: any) {
    this.amount = data.amount;
    this.transactionType=data.transactionType;
    this.transactionDate=data.transactionDate;
    this.accounts = data.accounts;
  }
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f
}