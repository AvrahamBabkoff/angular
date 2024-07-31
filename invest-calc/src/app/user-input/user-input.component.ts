import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResultsService } from '../investment-results/investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private resultService: ResultsService) {}

  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;

  onSubmit() {
    console.log(
      '%f %f %f %f',
      this.initialInvestment,
      this.annualInvestment,
      this.expectedReturn,
      this.duration
    );
    this.resultService.calculateInvestmentResults(
      this.initialInvestment,
      this.annualInvestment,
      this.expectedReturn,
      this.duration
    );
    this.initialInvestment = 0;
    this.annualInvestment = 0;
    this.expectedReturn = 0;
    this.duration = 0;
  }
}
