import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvoidDirective } from './avoid.directive';
import { DiscountComponent } from './discount/discount.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
