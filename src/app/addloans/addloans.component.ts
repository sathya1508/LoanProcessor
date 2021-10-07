import { Component, Input } from '@angular/core';

@Component({
  selector: 'addloans',
  templateUrl: './addloans.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class AddloansComponent {
  @Input() name: string;
}
