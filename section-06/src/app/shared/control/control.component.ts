import {
  Component,
  HostBinding,
  HostListener,
  input,
  ViewEncapsulation,
  inject,
  ElementRef,
  ContentChild,
  contentChild,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onclick() {
  //   console.log('click host element');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  // private control = contentChild.required<ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >>('input');

  private control = contentChild<ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >>('input');
  onClick() {
    console.log('click property');
    console.log(this.el);
    console.log(this.control());
  }
}
