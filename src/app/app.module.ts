import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { PostComponent } from './post/post.component';
import { OrderComponent } from './order/order.component';
import { MerchComponent } from './merch/merch.component';
import { MessageComponent } from './message/message.component';
import { DonatComponent } from './donat/donat.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'order', component: OrderComponent},
  {path: 'merch', component: MerchComponent},
  {path: 'donat', component: DonatComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    PostComponent,
    OrderComponent,
    MerchComponent,
    MessageComponent,
    DonatComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
