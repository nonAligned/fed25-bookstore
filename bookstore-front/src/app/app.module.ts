import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { BookStoreComponent } from './bookstore/bookstore.component';
import { ItemComponent } from './bookstore/item/item.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './bookstore/filter/filter.component';
import { CartComponent } from './bookstore/cart/cart.component';
import { ModalComponent } from './bookstore/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BookStoreComponent,
    ItemComponent,
    FilterComponent,
    CartComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
