import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Transaction } from "../types/Transaction";
<<<<<<< HEAD
import { Observable } from "rxjs";
import { Customer } from "../types/Customer";
import { Account } from "../types/Account";
=======
import { Account } from "../types/Account";

//import { Transaction } from "../types/Transaction";
import { Observable } from "rxjs";
import { Customer } from "../types/Customer";
//import { Account } from "../types/Account";
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f
// import { transition } from "@angular/animations";

@Injectable({
  providedIn: "root",
})
export class BankService {
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  addCustomer(customer: Customer): Observable<Customer> {
<<<<<<< HEAD
  }

  getCustomers(): Observable<Customer[]> {
    
=======
    return this.http.post<Customer>(`${this.baseUrl}/customers`, customer);
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(
      `${this.baseUrl}/customers`
    );
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f

  }

  addAccount(account: Account): Observable<Account> {
<<<<<<< HEAD
   
  }

  getAccounts(): Observable<Account[]> {
    
=======
    return this.http.post<Account>(`${this.baseUrl}/accounts`, account);
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(
      `${this.baseUrl}/accounts`
    );
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f

  }

  performTransaction(transaction: Transaction): Observable<Transaction> {
<<<<<<< HEAD
   
  }

  getOutstandingBalance(userId: string): Observable<number> {
    
  }

  getAllTranactions(): Observable<Transaction[]> {
    
=======
    return this.http.post<Transaction>(
      `${this.baseUrl}/transactions`,
      transaction
    );
  }

  getOutstandingBalance(userId: string): Observable<number> {
    return this.http.get<number>(
      `${this.baseUrl}/out-standing?userId=${userId}`
    );

  }

  getAllTranactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      `${this.baseUrl}/transactions`
    );
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f

  }
  /** get account by user */
  getAccountsByUser(userId:string|null): Observable<Account[]> {
<<<<<<< HEAD
    
=======
    return this.http.get<Account[]>(
      `${this.baseUrl}/accounts/user/${userId}`
    );
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f

  }

  getTransactionByUser(userId: string|null): Observable<Transaction[]> {
<<<<<<< HEAD
    
=======
    return this.http.get<Transaction[]>(
      `${this.baseUrl}/transactions/customer/${userId}`
    );
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f

  }

  deleteCustomer(customerId: number): Observable<any> {
<<<<<<< HEAD
    
  }

  editCustomer(customer: Customer): Observable<Customer> {
   
  }

  deleteAccount(accountId: number): Observable<any> {
    
  }

  editAccount(account: Account): Observable<Account> {
    // return null;
=======
    return this.http.delete(`${this.baseUrl}/customers/${customerId}`);
  }

  editCustomer(customer: Customer): Observable<Customer> {
    console.log(customer);
    const url = `${this.baseUrl}/customers/${customer.customerId}`;
    return this.http.put<Customer>(url, customer);
  }
 

  deleteAccount(accountId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/accounts/${accountId}`);
  }

  editAccount(account: Account): Observable<Account> {
    console.log(account);
    const url = `${this.baseUrl}/accounts/${account.customer?.customerId}`;
    return this.http.put<Account>(url, account);
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f
  }


}
