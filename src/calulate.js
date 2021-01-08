

export function calculate(totalAmt, downPayment, numberOfPayments) {
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

  var calculatedDownPayment = downPayment;
  return { calculatedDownPayment, paymentPerPeriod, remainingAmt };
}

export function existingCalculate(totalAmt, downPayment, existing ,numberOfPayments){
   
  var remainingAmt = totalAmt - downPayment + Number(existing);

  var paymentPerPeriod = remainingAmt / numberOfPayments;

  /** Clean Calculation with even number */

  // round payment per period down to nearest dollar
  paymentPerPeriod = Math.floor(paymentPerPeriod)

  // remaining
  var remaining_PLUS_existing = paymentPerPeriod * numberOfPayments;

  // remaining amount
  remainingAmt = remaining_PLUS_existing - existing;

  // substract total minus remaining to get down payment
  downPayment = Math.round((totalAmt - remainingAmt) * 100) / 100;

  // assign to values for return

  var calculatedDownPayment = downPayment;
  var remaining_existing = remaining_PLUS_existing;
  return {
    calculatedDownPayment,
    paymentPerPeriod,
    remainingAmt,
    remaining_existing,
  };
}