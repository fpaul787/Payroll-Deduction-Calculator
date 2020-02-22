// The EventTarget method addEventListener() sets up a function 
// that will be called whenever the specified event is delivered 
// to the target.
window.addEventListener('load', init)


// Constant for minimum amt on PD ( 10%)
const MINIMUM_PERCENTAGE = .10
var totalAmt
var downPaymentAmt
var numberOfPayments
var remainingAmt
var paymentPerPeriodAmt



function init() {



    // ***listen to button click events  ** //
    document.getElementById("calculatePDButton").addEventListener("click", function (event) {
        calculatePD_A(event)
    })

    document.getElementById("calculatePDButton_CustomDP").addEventListener("click", function (event) {
        calculatePD_CustomDP(event)
    })

    document.getElementById("calculatePDButton_CustomRemaining").addEventListener("click", function (event) {
        calculatePD_C(event)
    })



}

function calculatePD_CustomDP(){
    // get total Amt
    totalAmt = document.getElementById("totalID").value

    downPaymentAmt = document.getElementById("downPaymentID").value
    if(downPaymentAmt == 0 ){
        alert("Please enter a down payment amount")
        return
    }else if(downPaymentAmt < totalAmt * MINIMUM_PERCENTAGE){
        alert("Down payment can't be less than 10% of total")
        return
    }

    // get payment periods
    if (document.getElementById("twelveRadioButtonID").checked) {
        numberOfPayments = 12
        
    } else if (document.getElementById("sixteenRadioButtonID").checked) {
        numberOfPayments = 16
        
    } else if (document.getElementById('twentyRadioButtonID').checked) {
        numberOfPayments = 20
        
    } else {
        alert("Please select number of periods")
        return
    }    

    calculateFromDownPayment(downPaymentAmt)
    showData(downPaymentAmt, remainingAmt, paymentPerPeriodAmt)

}


function calculatePD_A() {
    // get total Amt
    totalAmt = document.getElementById("totalID").value

    // get payment periods
    if (document.getElementById("twelveRadioButtonID").checked) {
        numberOfPayments = 12
        calculateFromAmount(totalAmt)
        showData(downPaymentAmt, remainingAmt, paymentPerPeriodAmt)
    } else if (document.getElementById("sixteenRadioButtonID").checked) {
        numberOfPayments = 16
        calculateFromAmount(totalAmt)
        showData(downPaymentAmt, remainingAmt, paymentPerPeriodAmt)
    } else if (document.getElementById('twentyRadioButtonID').checked) {
        numberOfPayments = 20
        calculateFromAmount(totalAmt)
        showData(downPaymentAmt, remainingAmt, paymentPerPeriodAmt)
    } else {
        alert("Please select number of periods")
    }    
}

// could combine the following two functions into
// one function
function calculateFromDownPayment(downPaymentInput){

    
    
    /** Initial Calculation */
    remainingAmt = totalAmt - downPaymentInput
    
    paymentPerPeriodAmt = remainingAmt / numberOfPayments

    
    /** Clean Calculation with even numbers */

    // round payment per period down to nearest dollar
    paymentPerPeriodAmt = Math.floor(paymentPerPeriodAmt)

    // multiply by number of payments to get remaining
    remainingAmt = paymentPerPeriodAmt * numberOfPayments

    // substract total minus remaining to get down payment
    downPaymentAmt = Math.round((totalAmt - remainingAmt) * 100) / 100

    console.log("Total Amount: " + totalAmt)
    console.log("Down Payment: " + downPaymentAmt)
    console.log("Remaining: " + remainingAmt)
    console.log("Payment Per Period: " + paymentPerPeriodAmt)

}

function calculateFromAmount(totalAmt) {
    /** Initial Calculation */
    downPaymentAmt = totalAmt * MINIMUM_PERCENTAGE

    remainingAmt = totalAmt - downPaymentAmt

    paymentPerPeriodAmt = remainingAmt / numberOfPayments


    /** Clean Calculation with even numbers */

    // round payment per period down to nearest dollar
    paymentPerPeriodAmt = Math.floor(paymentPerPeriodAmt)

    // multiply by number of payments to get remaining
    remainingAmt = paymentPerPeriodAmt * numberOfPayments

    // substract total minus remaining to get down payment
    downPaymentAmt = Math.round((totalAmt - remainingAmt) * 100) / 100
}

function showData(downPayment, remainingAmount, paymentPerPeriod) {

    //console.log("Down Payment: " + downPayment)
    document.getElementById("downPaymentID").value = downPayment

    //console.log("Remaining Amount: " + remainingAmount)
    document.getElementById("remainingID").value = remainingAmount

    //console.log("Payment per Period: " + paymentPerPeriod)
    document.getElementById("paymentPerPeriodID").value = paymentPerPeriod


}
