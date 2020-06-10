
var radioBillAddBtnElement = document.querySelector('.radioBillAddBtn');

var callTotalTwoElement	= document.querySelector('.callTotalTwo');
var smsTotalTwoElement	= document.querySelector('.smsTotalTwo')
var totalTwoElement = document.querySelector('.totalTwo')

var callsTotal2 = 0;
var smsTotal2 = 0;

function radioBillTotal (){
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

var billItemType = checkedRadioBtn.value.trim()
if (billItemType === 'call'){
	callsTotal2 += 2.75
}
    else if (billItemType === "sms"){
        smsTotal2 += 0.75;
    }

    callTotalTwoElement.innerHTML= callsTotal2.toFixed(2);
    smsTotalTwoElement.innerHTML= smsTotal2.toFixed(2);
    var totalCost = callsTotal2 +  smsTotal2;
    totalTwoElement.innerHTML = totalCost.toFixed(2);

    if(totalCost >= 50){
    	totalTwoElement.classList.add('danger')
    }

else if(totalCost >= 30){
	totalTwoElement.classList.add('warning')	
   } 
}

radioBillAddBtnElement.addEventListener('click', radioBillTotal); 
 

