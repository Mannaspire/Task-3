import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { AdminvendorComponent } from './adminvendor/adminvendor.component';
import { VendorComponent } from './vendor/vendor.component';
import { AuthGaurdService } from "./shared/auth-gaurd.service";

const routes: Routes = [
  {path:'', redirectTo:'product', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'product', component: ProductComponent},
  {path: 'admin/:id', component: AdminComponent, canActivate: [AuthGaurdService]},
  {path: 'adminvendor/:id', component: AdminvendorComponent, canActivate: [AuthGaurdService]},
  {path: 'vendor/:id', component: VendorComponent, canActivate: [AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
