import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Customer } from '../../types/Customer';

@Component({
  selector: 'app-customerarray',
  standalone: true,
  imports: [],
  templateUrl: './customerarray.component.html',
  styleUrl: './customerarray.component.css'
})
export class CustomerarrayComponent {
  
}
=======
// import { Customer } from '../bank/types/Customer';
import { CustomerTS } from '../../types/tstypes/Customerts';

@Component({
  selector: 'app-customerarray',

  templateUrl: './customerarray.component.html',
  styleUrls: ['./customerarray.component.css']
})
export class CustomerarrayComponent {
  customers: CustomerTS[] = [
    new CustomerTS("John Doe", "john@example.com", "john_doe", "password123", "User", "1"),
    new CustomerTS("John Doe1", "john1@example.com", "john_doe", "password123", "Admin", "2")
   ]
}
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f
