import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basics';
  number="42";
  img='https://logowik.com/content/uploads/images/react.jpg';
  constructor(){
    setTimeout(() => {
      this.img='https://logowik.com/content/uploads/images/179_angular.jpg';
    }, 5000);
  }
}
