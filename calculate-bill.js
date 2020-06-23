function phoneBill(){
	 const callPrice = 2.75
	 const smsCost = 0.75
	 const warningLevel = 20
	 const criticalLevel = 30

	var billTotal = 0

function totalPhoneBill(billString){
    var billItems = billString.split(',');
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += callPrice;
        }
        else if(billItem === "sms"){
            billTotal += smsCost;
        }
    }
}
function getTotal(){
	return billTotal
}

 function warningLevels (){
 	if(billTotal >= warningLevel){
 		return 'warning'
 	}
 }
 function criticalLevels(){
 	if(billTotal >= criticalLevel){
 		 	return 'critical'
 }
	
  }

    
    return {
    	totalPhoneBill,
    	getTotal,
     warningLevels,
    	 criticalLevels
	}
}
