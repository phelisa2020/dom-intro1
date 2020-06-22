// function  CalculateBill(){
// 	var billTotal = 0
	function totalPhoneBill(billString){
		var billTotal = 0
	// var billString= billStringElement.value
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
    // var roundedBillTotal = billTotal
    return billTotal
	
}
// return{
// 	totalPhoneBill
// }
// }