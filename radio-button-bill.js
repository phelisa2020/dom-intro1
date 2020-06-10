function RadioBtnBill (){
	var callsTotal  = 0;
	var smsTotal = 0;
	var overallTotal = 0;

	function forEachCallAdd (){
		callsTotal += 2.75
		overallTotal += 2.75;
	}
	function newCallsTotal (){
		callsTotal
	}
	function forEachSmsAdd (){
		smsTotal+=0.75
		overallTotal+=0.75;
	}
	function newSmsTotal (){
		return smsTotal;
	}
	function finalTotal (){
		return overallTotal;
	}
	function warningLevel (){
		return 'warning';
	}
	function criticalLevel (){
		return 'critical';
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