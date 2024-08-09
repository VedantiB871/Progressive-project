import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { AccountTS } from '../../types/tstypes/Accountts';
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f

@Component({
  selector: 'app-accountsample',
  standalone: true,
  imports: [],
  templateUrl: './accountsample.component.html',
<<<<<<< HEAD
  styleUrl: './accountsample.component.css'
})
export class AccountsampleComponent {

}
=======
  styleUrls: ['./accountsample.component.css']
})
export class AccountsampleComponent {
   account:AccountTS=new AccountTS("1",500.00,"1");
}
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f
