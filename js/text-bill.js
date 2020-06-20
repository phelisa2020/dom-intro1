var billTypeTextElement = document.querySelector('.billTypeText');   
var addToBillBtnElement = document.querySelector('.addToBillBtn');   
var callsTotalElement = document.querySelector('.callTotalOne');  
var smsTotalElement = document.querySelector('.smsTotalOne');    
var totalOneElement = document.querySelector('.totalOne');
var textBillFunction = textBill(); 
// instintiate my factory function
var textBill = function(){
   
    var billTypeEntered = billTypeTextElement.value.trim();

 if (billTypeEntered === "call"){
        textBillFunction.forEachCall()
    }
    else if (billTypeEntered === "sms"){
        textBillFunction.forEachSms()
    }

    callsTotalElement.innerHTML = textBillFunction.totalCallsTotal();
    smsTotalElement.innerHTML = textBillFunction.totalSmsTotal()
    totalOneElement.innerHTML = textBillFunction.total()

        const colorCoder = textBillFunction.warningLevels();
        totalOneElement.classList.add(colorCoder);
        
        const colorCoder2 = textBillFunction.criticalLevels();
        totalOneElement.classList.add(colorCoder2);
    }
 
addToBillBtnElement.addEventListener('click',textBill)