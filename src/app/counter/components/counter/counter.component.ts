import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter: {{ counter }}</h1>
    <button (click)="increasyBy()" >+1</button>
    <button (click)="decreasyBy()">-1</button>
  `
})


export class CounterComponent {

  public title: string = 'Mi primera App PJ';
  public counter:number = 10;

  increasyBy():void {  // void . no regresa nada
    this.counter += 1;
  }

  decreasyBy():void {  // void . no regresa nada
    this.counter -= 1;
  }


}

