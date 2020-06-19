
var radioBillAddBtnElement = document.querySelector('.radioBillAddBtn');

var callTotalTwoElement	= document.querySelector('.callTotalTwo');
var smsTotalTwoElement	= document.querySelector('.smsTotalTwo')
var totalTwoElement = document.querySelector('.totalTwo')

let radioButton = radioBill();

function radioBillTotal (){
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

var billItemType = checkedRadioBtn.value.trim()
if (billItemType === 'call'){
	radioButton.forEachCallAdd()
}
    else if (billItemType === "sms"){
        radioButton.forEachSmsAdd()
    }

    callTotalTwoElement.innerHTML= radioButton.newCallsTotal();
    smsTotalTwoElement.innerHTML= radioButton.newSmsTotal();
    // var totalCost = callsTotal2 +  smsTotal2;
    totalTwoElement.innerHTML = radioButton.finalTotal();

    
     	totalTwoElement.classList.add('critical')
    


 	totalTwoElement.classList.add('warning')	
    } 

radioBillAddBtnElement.addEventListener('click', radioBillTotal); 
 

