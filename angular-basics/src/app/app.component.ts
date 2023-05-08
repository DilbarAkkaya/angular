import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basics';
  number="42";
  inputValue = '';
  //img='https://logowik.com/content/uploads/images/react.jpg';
  constructor(){
   /*  setTimeout(() => {
      this.img='https://logowik.com/content/uploads/images/179_angular.jpg';
    }, 5000); */
  }
  onInput(event: Event){
    console.log('Event', event);
    this.inputValue = (<HTMLInputElement>event.target).value;
  }
  onClick(event: Event){
    console.log(event)
  }
  onBlur(str: string) {
    this.inputValue = str;
  }
}
