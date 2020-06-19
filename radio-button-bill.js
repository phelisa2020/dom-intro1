function radioBill(){
	var callsTotal  = 0.00;
	var smsTotal = 0.00;
	var overallTotal = 0.00;

	function forEachCallAdd (){
		// if(billType === 'call'){
			callsTotal += 2.75
			// overallTotal += 2.75;
		// }
		
	}
	function newCallsTotal (){
		return callsTotal.toFixed(2)

	}
	function forEachSmsAdd (){
		// if(billType === 'sms'){
			smsTotal+=0.75
		// overallTotal+=0.75;
		// }
		
	}
	function newSmsTotal (){
		return smsTotal.toFixed(2)
	}
	function finalTotal (){
		return (callsTotal + smsTotal).toFixed(2)
	}
	function warningLevel (){
	if(finalTotal >= 30){
		return 'warning';
	}
}
	function criticalLevel (){
		 if(finalTotal >= 50){
		 	return 'critical';
		 }
		
	}
	return {
		forEachCallAdd,
		newCallsTotal,
		forEachSmsAdd,
		newSmsTotal,
		finalTotal,
		warningLevel,
		criticalLevel


	}
};