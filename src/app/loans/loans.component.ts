import { Component, Input } from '@angular/core';

@Component({
  selector: 'loans',
  templateUrl: './loans.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class LoansComponent {
  @Input() name: string;
}
