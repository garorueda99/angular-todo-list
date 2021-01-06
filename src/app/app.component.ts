import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'AngularCC1';
  constructor() {
    console.log(this.title);
    console.log('test');
  }
}
