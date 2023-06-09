import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';
import { ListOrderComponent } from './components/list-order/list-order.component';
import { InfoOrderComponent } from './components/info-order/info-order.component'; 
import { MenuComponent } from './pages/menu/menu.component';
import { CartComponent } from './pages/cart/cart.component';
import { DishComponent } from './components/dish/dish.component';

import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const PRIMENG_DEPENDENCIES = [
ImageModule, 
InputNumberModule,
    InputTextModule,
    ChipModule,
    CardModule,
    ButtonModule,
    RatingModule,
]

@NgModule({
    declarations: [AppComponent, LoginComponent, RegisterComponent, MenuComponent, CartComponent, DishComponent, OrderComponent, ListOrderComponent, InfoOrderComponent],
    imports: [
        BrowserModule, 
        AppRoutingModule, 
        FormsModule, 
        FontAwesomeModule, 
        BrowserAnimationsModule,
        ...PRIMENG_DEPENDENCIES],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
