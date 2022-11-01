import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appAvoid]'
})
export class AvoidDirective {
  avoidCount = 0;

  @Input() delay = 0;
  @Output() avoided = new EventEmitter<number>();

  @HostBinding('style.left')
  left = '0px';

  @HostBinding('style.top')
  top = '0px';

  @HostBinding('style.position')
  position = 'relative';

  @HostListener('mouseover') 
  mouseOver() {
    let dir = Math.floor(Math.random() * 4);

    const vOffset = 100;
    const hOffset = 100;

    if (dir === 1 && parseInt(this.left) - hOffset <= 0) {
      dir = 0;
    }

    if (dir === 3 && parseInt(this.top) - vOffset <= 0) {
      dir = 2;
    }

    setTimeout(() => this.move(dir, {vOffset, hOffset}), this.delay);
  }

  private move(dir: number, offset: {vOffset: number, hOffset: number}) {
    switch (dir) {
      case 0:
        this.left = (parseInt(this.left) + offset.hOffset) + 'px';
        break;
      case 1:
        this.left = (parseInt(this.left) - offset.hOffset) + 'px';
        break;
      case 2:
        this.top = (parseInt(this.top) + offset.vOffset) + 'px';
        break;
      case 3:
        this.top = (parseInt(this.top) - offset.vOffset) + 'px';
        break;
    }

    this.avoidCount++;
    this.avoided.emit(this.avoidCount);
  }
}
