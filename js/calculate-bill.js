var billStringElement = document.querySelector(".billString");
var calculateBtnElement = document.querySelector('.calculateBtn');
var billTotalElement = document.querySelector(".billTotal");
var billTotalSpansElement = document.querySelector('.total:checked')
var billTotalSpansElement = document.querySelector('.total')
var phone = phoneBill()

function calculateFunction(){
var billString= billStringElement.value
 var roundedBillTotal = phone.totalPhoneBill(billString);
 
    billTotalElement.innerHTML = phone.getTotal().toFixed(2)	
    const currentTotal = Number(phone.getTotal());
	
    const color3 = phone.warningLevels();
    billTotalSpansElement.classList.add(color3);

   const color4 = phone.criticalLevels();
   billTotalSpansElement.classList.add(color4);
 
    
}
calculateBtnElement.addEventListener('click', calculateFunction);
