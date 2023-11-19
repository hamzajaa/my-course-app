import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/home/home.component";
import {ProfileComponent} from "./modules/profile/profile.component";
import {NgModule} from "@angular/core";
import {ProductComponent} from "./modules/product/product.component";

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
  {
    path: 'product', // http://localhost:4200/product
    component: ProductComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
