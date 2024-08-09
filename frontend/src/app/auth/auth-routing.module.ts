import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
<<<<<<< HEAD

const routes: Routes = [];
=======
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./components/login/login.component";
// import { UserListComponent } from "./components/user-list/user-list.component";
import { UserComponent } from "./components/user/user.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  // { path: "users", component: },
  { path: "add-user", component: UserComponent },
];
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
<<<<<<< HEAD
=======

>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f
