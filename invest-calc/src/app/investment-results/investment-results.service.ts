import { Injectable } from "@angular/core";
import { type Result } from "./result.model";

@Injectable({providedIn: 'root'})
export class ResultsService {
  private annualData: Result[] = [];
  calculateInvestmentResults(initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number) {
    let formattedNumber = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  });
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      this.annualData.push({
        year: year,
        investmentValue: formattedNumber.format(investmentValue),
        yearInterest: formattedNumber.format(interestEarnedInYear),
        totalInterest: formattedNumber.format(totalInterest),
        investedCapital: formattedNumber.format(initialInvestment + annualInvestment * year)
      });
    }  
  }
  
  getResults() {
    return this.annualData;
  }
}
