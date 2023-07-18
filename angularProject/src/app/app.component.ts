import { Component } from '@angular/core';


interface Product {
  name: string;
  cost: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angularProject';
  products: Product[] = [
    { name: 'Roasted porg', cost: '11'},
    { name: 'Meiloorun fruit', cost: '38'},
    { name: 'Photon fizzle', cost: '15'},
    { name: 'Dex\'s double', cost: '30'},
  ];
}
