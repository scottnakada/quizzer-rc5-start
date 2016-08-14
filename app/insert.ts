import {Directive, Input, ElementRef, Renderer, OnInit} from '@angular/core';

@Directive({
  selector: '[insert]'
})
export class InsertDirective implements OnInit {
  @Input() insert: string;

  constructor(private element: ElementRef, private renderer: Renderer) {
    this.element = element;
    this.renderer = renderer;
    this.insert = element.nativeElement.attributes.insert.value;
  }

  ngOnInit() {
    this.renderer.setElementStyle(this.element.nativeElement, 'fontSize', this.insert + '%');
  }
}