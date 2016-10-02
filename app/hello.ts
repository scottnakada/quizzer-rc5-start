import {Component} from '@angular/core';

// annotations come from TS
@Component({
  selector: 'hello',
  templateUrl: './templates/hello.html',
  //template: `
//<fieldset>
  //<h2>Hello {{name}}, from inline template.</h2><br/>
  //<input [(ngModel)]="name"  type="text"/>
  //<button type="button" (click)="clickHandler()">Click Me!</button>
//</fieldset>`
})
export class HelloComponent {
  public name:string = "your name";

  // the empty constructor isn't actually needed
  constructor() {
  }

  clickHandler(event) {
    alert('Bingo!');
  }
}

