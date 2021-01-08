

export default function calculate(totalAmt, downPayment, numberOfPayments) {
  /** Initial Calculation */

  var remainingAmt = totalAmt - downPayment;

  var paymentPerPeriod = remainingAmt / numberOfPayments;

  /** Clean Calculation with even number */

  // round payment per period down to nearest dollar
  paymentPerPeriod = Math.floor(paymentPerPeriod);

  // multiply by number of payments to get remaining
  remainingAmt = paymentPerPeriod * numberOfPayments;

  // substract total minus remaining to get down payment
  downPayment = Math.round((totalAmt - remainingAmt) * 100) / 100;

  var calculatedDownpayment = downPayment;
  return { calculatedDownpayment, paymentPerPeriod, remainingAmt };
}