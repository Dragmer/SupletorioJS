import {Routes} from "@angular/router"
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";

const rutas : Routes = [
  {path: "", redirectTo: "login", pathMatch:"full"},
  {path: "login", component: LoginComponent},
]

export {rutas};
