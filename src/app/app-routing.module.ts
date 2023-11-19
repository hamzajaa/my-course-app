import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/home/home.component";
import {ProfileComponent} from "./modules/profile/profile.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '', // http://localhost:4200
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', // http://localhost:4200/home
    component: HomeComponent
  },
  {
    path: 'profile', // http://localhost:4200/profile
    component: ProfileComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
