// The EventTarget method addEventListener() sets up a function 
// that will be called whenever the specified event is delivered 
// to the target.
window.addEventListener('load', init)



const MINIMUM_PERCENTAGE = .10  // Constant for minimum amt on PD ( 10%)
var totalAmt                    // total amount of transaction
var downPaymentAmt              // down payment amount
var numberOfPayments            // number of payments
var remainingAmt                // remaining amount
var existingAmt                 // existing amount on payroll
var remaining_PLUS_existingAmt   // remaining + existing amount
var paymentPerPeriodAmt         // payment per period



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

    // get existing Amt
    existingAmt = document.getElementById("existingID").value

    // get periods from user
    getPeriods()

    // calculations from Total amount
    calculate(totalAmt, existingAmt)
    
    // Show data
    showData(downPaymentAmt, remainingAmt, remaining_PLUS_existingAmt, paymentPerPeriodAmt)

    
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
        document.getElementById("periodsID").className = "periods"
        numberOfPayments = 12
        
    } else if (document.getElementById("sixteenRadioButtonID").checked) {
        document.getElementById("periodsID").className = "periods"
        numberOfPayments = 16
        
    } else if (document.getElementById('twentyRadioButtonID').checked) {
        document.getElementById("periodsID").className = "periods"
        numberOfPayments = 20
        
    } else {
        document.getElementById("periodsID").className = "periodsDANGER"
        alert("Please select number of periods")     
        
        throw new Error()
    }    
    }


function calculate(totalAmtParam, existingAmtParam, downPaymentAmtParam = 0) {

    /** Initial Calculation */

    if(downPaymentAmtParam == 0){
        downPaymentAmtParam = totalAmtParam * MINIMUM_PERCENTAGE
    }      
     

    
    remainingAmt = totalAmtParam - downPaymentAmtParam + Number(existingAmtParam)
    

    paymentPerPeriodAmt = remainingAmt / numberOfPayments

    
    /** Clean Calculation with even numbers */

    // round payment per period down to nearest dollar
    paymentPerPeriodAmt = Math.floor(paymentPerPeriodAmt)

    // remaining 
    remaining_PLUS_existingAmt = paymentPerPeriodAmt * numberOfPayments

    // remaining amount 
    remainingAmt = remaining_PLUS_existingAmt - existingAmtParam

    // substract total minus remaining to get down payment
    downPaymentAmtParam = Math.round((totalAmtParam - remainingAmt) * 100) / 100

    // assign to global values
    downPaymentAmt = downPaymentAmtParam
    totalAmt = totalAmtParam
    
}

function showData(downPayment, remainingAmount, remaining_existing ,paymentPerPeriod) {

    //console.log("Down Payment: " + downPayment)
    document.getElementById("downPaymentID").value = downPayment

    //console.log("Remaining Amount: " + remainingAmount)
    document.getElementById("remainingID").value = remainingAmount

    document.getElementById("remainingexistingID").value = remaining_existing

    //console.log("Payment per Period: " + paymentPerPeriod)
    document.getElementById("paymentPerPeriodID").value = paymentPerPeriod

    // Show data in text area
    textareaString = `Total: $${totalAmt} \nDown Payment: $${downPayment} \nRemaining: $${remainingAmount} \nPayment Per ${numberOfPayments} Periods: $${paymentPerPeriod}`
    document.getElementById('textareaID').value = textareaString

}



