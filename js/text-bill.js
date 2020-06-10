var billTypeTextElement = document.querySelector('.billTypeText');   
var addToBillBtnElement = document.querySelector('.addToBillBtn');   
var callsTotalElement = document.querySelector('.callTotalOne');  
var smsTotalElement = document.querySelector('.smsTotalOne');    
var totalOneElement = document.querySelector('.totalOne');
var callsTotal = 0;
var smsTotal = 0; 
// instintiate my factory function
var textBill = function(){
   
    var billTypeEntered = billTypeTextElement.value.trim();

 if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }

    //update the totals that is displayed on the screen.
    callsTotalElement.innerHTML = callsTotal.toFixed(2);
    smsTotalElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalOneElement.innerHTML = totalCost.toFixed(2)

    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalOneElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalOneElement.classList.add("warning");
    }
}
 
addToBillBtnElement.addEventListener('click',textBill)