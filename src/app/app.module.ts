import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoansComponent } from './loans/loans.component';
import { AddloansComponent } from './addloans/addloans.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, LoansComponent, AddloansComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
