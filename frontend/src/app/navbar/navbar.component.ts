<<<<<<< HEAD

export class NavBarComponent{

  

}
=======
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {
 
  constructor(private router: Router) { }
  // user:User;
  role:string|null;
  ngOnInit(): void {
    // console.log('NB');
    console.log(localStorage.getItem("role"));
    this.role=localStorage.getItem("role");
  }
 
  logout(): void {
    localStorage.removeItem('token')
    this.router.navigate(["/auth"]);
  }
 
}
 
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f
