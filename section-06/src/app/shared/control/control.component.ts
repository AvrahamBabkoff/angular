import {
  Component,
  HostBinding,
  HostListener,
  input,
  ViewEncapsulation,
  inject,
  ElementRef
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
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onclick() {
  //   console.log('click host element');
  // }
  onClick() {
    console.log('click property');
    console.log(this.el);
  }
  label = input.required<string>();
  private el = inject(ElementRef);
}
