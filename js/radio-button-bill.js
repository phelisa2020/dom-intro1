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
    totalTwoElement.innerHTML = radioButton.finalTotal();

    const color = radioButton.warningLevel();
   totalTwoElement.classList.add(color);

   const color2 = radioButton.criticalLevel();
   totalTwoElement.classList.add(color2);

    
    } 

radioBillAddBtnElement.addEventListener('click', radioBillTotal); 
 

