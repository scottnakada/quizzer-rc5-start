import {Component} from '@angular/core';
import {Seek} from './Seek';

// an internal class
class Position {
  index: number;
  total: number;

  constructor(maxPosition?: number) {
    this.total = maxPosition || 0;
    this.index = 0;
  }

  setMax(maxPosition: number) {
    this.total = maxPosition;
  }

  seek(direction: Seek) {
    switch (direction) {
      case Seek.Forward:
        if (this.index < this.total) {
          this.index += 1;
        }
        break;
      case Seek.Backward:
        if (this.index) {
          this.index -= 1;
        }
        break;
      case Seek.Beginning:
        this.index = 0;
    }
  }

  getPosition() {
    return this.index;
  }

  getTotal() {
    return this.total;
  }
}

@Component({
  selector: 'player',
  template: '<h1>Player</h1>'
})
export class PlayerComponent {
}