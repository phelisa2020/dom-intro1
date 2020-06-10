
var callCostSettingElement = document.querySelector('.callCostSetting');
var smsCostSettingElement = document.querySelector('.smsCostSetting');
var warningLevelSettingElement = document.querySelector('.warningLevelSetting');
var criticalLevelSettingElement = document.querySelector('.criticalLevelSetting');
var updateSettingElement = document.querySelector('.updateSettings');

var radioBillAddBtnTwoElement = document.querySelector('.radioBillAddBtnTwo')
var callTotalSettingsElement = document.querySelector('.callTotalSettings');
var smsTotalSettingsElement = document.querySelector('.smsTotalSettings');
var totalSettingsElement = document.querySelector('.totalSettings');

var callTotal = 0.00
var smsTotal = 0.00

var callCost = 0.00;
var smsCost=0.00;
var warning = 0.00;
var critical = 0.00;
var totalSettings = 0.00
var changeTotalColor = 0.00
var totalCost4 = 0.00


function updateSettingBtnClicked (){

    callCost = Number(callCostSettingElement.value) 
      smsCost = Number(smsCostSettingElement.value)
      warning = Number(warningLevelSettingElement.value) 
     critical = Number(criticalLevelSettingElement.value)
     changeTotalColor2()

}


function radioBillSetTotal (){
   if(totalCost4 < critical){
 
var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
var billItemTypeRadio = checkedRadioBtn.value.trim()
 if (billItemTypeRadio === 'call'){
  callTotal += callCost
}
    else if (billItemTypeRadio === "sms"){
        smsTotal += smsCost
    }

    }
    callTotalSettingsElement.innerHTML= callTotal.toFixed(2);
    smsTotalSettingsElement.innerHTML= smsTotal.toFixed(2);
   
    totalCost4 = callTotal +  smsTotal;
  totalSettingsElement.innerHTML = totalCost4.toFixed(2)
   changeTotalColor2()
}

function changeTotalColor2(){
 totalSettingsElement.classList.remove('danger')
 totalSettingsElement.classList.remove('warning')
 if (totalCost4 >= critical){
  totalSettingsElement.classList.add('danger')
 }   

 else if (totalCost4 >= warning){
  totalSettingsElement.classList.add('warning')
 }
}

updateSettingElement.addEventListener('click',updateSettingBtnClicked)
radioBillAddBtnTwoElement.addEventListener('click', radioBillSetTotal)

