import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminvendorComponent } from './adminvendor/adminvendor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VendorComponent } from './vendor/vendor.component';
import { AuthGaurdService } from './shared/auth-gaurd.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    LoginComponent,
    AdminComponent,
    VendorComponent,
    AdminvendorComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatToolbarModule,
  ],

  providers: [AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
