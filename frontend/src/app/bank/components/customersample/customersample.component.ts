import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../types/Customer';
import { of } from 'rxjs';
=======
// import { Account } from '../bank/types/Account';
import { CustomerTS } from '../../types/tstypes/Customerts';
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f

@Component({
  selector: 'app-customersample',
  standalone: true,
  imports: [],
  templateUrl: './customersample.component.html',
<<<<<<< HEAD
  styleUrl: './customersample.component.css'
})
export class CustomersampleComponent {
 
}

=======
  styleUrls: ['./customersample.component.css']
})
export class CustomersampleComponent {
  // account:Cu = new Account("1",400,"1");
  // name: string, email: string, username: string, password: string, role: string, customerId?:string)
   customer:CustomerTS = new CustomerTS("jhon","jhon@gmail.com","jhonuser","User","1");
}
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f
