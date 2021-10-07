import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoansComponent } from './loans/loans.component';
import { AddloansComponent } from './addloans/addloans.component';

const routes: Routes = [
  { path: 'loans', component: LoansComponent },
  { path: 'loans/add', component: AddloansComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, LoansComponent, AddloansComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
