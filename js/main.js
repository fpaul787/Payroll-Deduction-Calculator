// The EventTarget method addEventListener() sets up a function 
// that will be called whenever the specified event is delivered 
// to the target.
window.addEventListener('load', init)


// Constant for minimum amt on PD ( 10%)
const MINIMUM_PERCENTAGE = .10
var totalAmt
var downPaymentAmt
var remainingAmt
var paymentPerPeriodAmt



function init() {

    

    // ***listen to button click events  ** //
    document.getElementById("calculatePDButton").addEventListener("click", function (event) {
        calculatePD_A(event)
    })

    document.getElementById("calculatePDButton_CustomDP").addEventListener("click", function (event) {
        calculatePD_B(event)
    })

    document.getElementById("calculatePDButton_CustomRemaining").addEventListener("click", function (event) {
        calculatePD_C(event)
    })


    
}

function calculatePD_A(){
    // get total Amt
    totalAmt = document.getElementById("totalAmount").value

    /** Initial Calculation */
    

}

console.log(totalAmt)
