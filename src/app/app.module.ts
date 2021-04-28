import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { MainComponent } from './shared/components/main/main.component';
import { MerchComponent } from './shared/components/merch/merch.component';
import { BasketComponent } from './shared/components/basket/basket.component';
import { DonatComponent } from './shared/components/donat/donat.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ExitAboutGuard} from './exit.hireme.guard';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [ExitAboutGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    MerchComponent,
    BasketComponent,
    DonatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule

  ],
  providers: [ExitAboutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
