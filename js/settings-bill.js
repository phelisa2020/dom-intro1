
var callCostSettingElement = document.querySelector('.callCostSetting');
var smsCostSettingElement = document.querySelector('.smsCostSetting');
var warningLevelSettingElement = document.querySelector('.warningLevelSetting');
var criticalLevelSettingElement = document.querySelector('.criticalLevelSetting');
var updateSettingElement = document.querySelector('.updateSettings');

var radioBillAddBtnTwoElement = document.querySelector('.radioBillAddBtnTwo')
var callTotalSettingsElement = document.querySelector('.callTotalSettings');
var smsTotalSettingsElement = document.querySelector('.smsTotalSettings');
var totalSettingsElement = document.querySelector('.totalSettings');
let settingsBill = billWithSetting();

function updateSettingBtnClicked (){

    settingsBill.setCallCost(Number(callCostSettingElement.value)); 
      settingsBill.setSmsCost(Number(smsCostSettingElement.value));
      settingsBill.setWarningLevel(Number(warningLevelSettingElement.value)); 
    settingsBill.setCriticalLevel(Number(criticalLevelSettingElement.value));
      colorCode()

}


 function radioBillSetTotal (){
 
 var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
 var billItemTypeRadio = checkedRadioBtn.value.trim()
  if (billItemTypeRadio === 'call'){
    settingsBill.makeCall()
 }
     else if (billItemTypeRadio === "sms"){
         settingsBill.sendSms()
     }

     
     callTotalSettingsElement.innerHTML= settingsBill.getTotalCallCost();
     smsTotalSettingsElement.innerHTML= settingsBill.getTotalSmsCost();
   
    // totalCost4 = callTotal +  smsTotal;
   totalSettingsElement.innerHTML = settingsBill.getTotalCost();
    colorCode()
 }

 function colorCode(){
  totalSettingsElement.classList.remove('critical')
  totalSettingsElement.classList.remove('warning')
  const colorClassName = settingsBill.totalClassName();
   totalSettingsElement.classList.add(colorClassName);
 }

updateSettingElement.addEventListener('click',updateSettingBtnClicked)
 radioBillAddBtnTwoElement.addEventListener('click', radioBillSetTotal)

