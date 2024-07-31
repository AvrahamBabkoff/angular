import { Component } from '@angular/core';
import { ResultsService } from './investment-results.service'; 
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(private resultService: ResultsService) {}
  get results () {
    return this.resultService.getResults();
  }
}
