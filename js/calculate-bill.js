var billStringElement = document.querySelector(".billString");
var calculateBtnElement = document.querySelector('.calculateBtn');
var billTotalElement = document.querySelector(".billTotal");
var billTotalSpansElement = document.querySelector('.total:checked')

 
function totalPhoneBill(billString){
    // get the string entered in the textArea
    //split the string
    var billTotal = 0
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    return billTotal.toFixed(2)
}
function calculateBtnClicked(){
	  var billString= billStringElement.value
	   var roundedBillTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = roundedBillTotal;

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
calculateBtnElement.addEventListener('click', calculateBtnClicked);
