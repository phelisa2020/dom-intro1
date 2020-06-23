var billStringElement = document.querySelector(".billString");
var calculateBtnElement = document.querySelector('.calculateBtn');
var billTotalElement = document.querySelector(".billTotal");
var billTotalSpansElement = document.querySelector('.total:checked')
var billTotalSpansElement = document.querySelector('.total')

function calculateFunction(){
var billString= billStringElement.value
 var roundedBillTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = roundedBillTotal.toFixed(2)	
    const currentTotal = Number(roundedBillTotal);
	billTotalSpansElement.classList.remove('warning')
    billTotalSpansElement.classList.remove('critical')
 
 	if(currentTotal >= 30){
 		billTotalSpansElement.classList.add('critical');
 	}
 	else if(currentTotal >= 20 && currentTotal<30){
 		billTotalSpansElement.classList.add('warning');
 	}
    
}
calculateBtnElement.addEventListener('click', calculateFunction);
