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
        calculatePD_FromTotal(event)
    })

    document.getElementById("calculatePDButton_CustomDP").addEventListener("click", function (event) {
        calculatePD_FromDP(event)
    })

    document.getElementById("calculatePDButton_CustomRemaining").addEventListener("click", function (event) {
        calculatePD_FromPPP(event)
    })



}

function calculatePD_FromTotal() {
    // get total Amt
    totalAmt = document.getElementById("totalID").value

    // get periods from user
    getPeriods()

    // calculations from Total amount
    calculate(totalAmt)
    
    // Show data
    showData(downPaymentAmt, remainingAmt, paymentPerPeriodAmt)

}

function calculatePD_FromDP(){
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

    getPeriods()    

    calculate(totalAmt,downPaymentAmt)

    showData(downPaymentAmt, remainingAmt, paymentPerPeriodAmt)

}

function calculatePD_FromPPP(){
    alert('Not implemented Yet')
}

function getPeriods(){
    // get payment periods
    if (document.getElementById("twelveRadioButtonID").checked) {
        numberOfPayments = 12
        
    } else if (document.getElementById("sixteenRadioButtonID").checked) {
        numberOfPayments = 16
        
    } else if (document.getElementById('twentyRadioButtonID').checked) {
        numberOfPayments = 20
        
    } else {
        alert("Please select number of periods")
        throw new Error()
    }    
    }


function calculate(totalAmtParam, downPaymentAmtParam = 0) {

    /** Initial Calculation */

    if(downPaymentAmtParam == 0){
        downPaymentAmtParam = totalAmtParam * MINIMUM_PERCENTAGE
    }        

    
    remainingAmt = totalAmtParam - downPaymentAmtParam

    paymentPerPeriodAmt = remainingAmt / numberOfPayments

    /** Clean Calculation with even numbers */

    // round payment per period down to nearest dollar
    paymentPerPeriodAmt = Math.floor(paymentPerPeriodAmt)

    // multiply by number of payments to get remaining
    remainingAmt = paymentPerPeriodAmt * numberOfPayments

    // substract total minus remaining to get down payment
    downPaymentAmtParam = Math.round((totalAmtParam - remainingAmt) * 100) / 100

    // assign to global values
    downPaymentAmt = downPaymentAmtParam
    totalAmt = totalAmtParam
    
}

