var billStringElement = document.querySelector(".billString");
var calculateBtnElement = document.querySelector('.calculateBtn');
var billTotalElement = document.querySelector(".billTotal");
var billTotalSpansElement = document.querySelector('.total:checked')
let calculate = CalculateBill();
// function totalPhoneBill(){

// }
function calculateFunction(){
	var billString= billStringElement.value
 var roundedBillTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = billString;

	var billTotalSpansElement = document.querySelector('.total')
    const currentTotal = Number(roundedBillTotal);

	billTotalSpansElement.classList.remove('warning')
    billTotalSpansElement.classList.remove('danger')

 
 	if(currentTotal >= 30){
 		billTotalSpansElement.classList.add('danger');
 	}
 	else if(currentTotal >= 20 && currentTotal<30){
 		billTotalSpansElement.classList.add('warning');
 	}
 
  
    
}
calculateBtnElement.addEventListener('click', calculateFunction);
