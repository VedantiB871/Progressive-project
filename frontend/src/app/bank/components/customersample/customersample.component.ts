import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerTS } from '../../types/tstypes/Customerts';
import { of } from 'rxjs';
import { CustomerComponent } from '../customer/customer.component';

@Component({
  selector: 'app-customersample',
  standalone: true,
  imports: [],
  templateUrl: './customersample.component.html',
  styleUrls: ['./customersample.component.css']
})
export class CustomersampleComponent {
  customer:CustomerTS;
  constructor(){
    this.customer = new CustomerTS('1234', 'Vedanti', 'vedanti@gmail.com', '12345', 'VedantiB', 'admin');
    // this.customer.customerId=1234;
    // this.customer.name='Vedanti';
    // this.customer.email='vedanti@gmail.com';
    // this.customer.password='12345';
    // this.customer.username='VedantiB';
    // this.customer.role='admin';
  }
 
}

