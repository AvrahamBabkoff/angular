import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {

  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;

  // with this method, we add a ? to form() bellow
  // private form = viewChild<ElementRef<HTMLFormElement>>('form');

  // with this method, we do not need to add a ?
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');


  ngOnInit() {
    console.log('ON INIT');
    console.log(this.form?.nativeElement)
    
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement)
  }
  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);
    // this.form()?.nativeElement.reset();
    this.form?.nativeElement.reset();
  }
}
