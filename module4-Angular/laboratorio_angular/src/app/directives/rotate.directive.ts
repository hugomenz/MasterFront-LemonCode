import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: 'img[rotate]',
})
export class RotateDirective implements OnInit {
  @Input() rotate: number = 0;
  @Input() step: number = 10;

  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.transform = `rotate(${this.rotate.toString()}deg)`;
  }

  @HostListener('click', ['$event'])
  onClick(event: KeyboardEvent) {
    if (event.shiftKey) {
      this.rotate -= this.step;
    } else {
      this.rotate += this.step;
    }
    const img = this.elementRef.nativeElement as HTMLImageElement;
    img.style.transform = `rotate(${this.rotate.toString()}deg)`;
  }
}
