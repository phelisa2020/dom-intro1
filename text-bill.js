var textBill = function(){
	var calls = 0;
	var sms = 0;
	var totalAdd = 0;

	function forEachCall(){
		calls += 2.75;
		// totalAdd += 2.75;
	}
	function forEachSms(){
		sms += 0.75
		// totalAdd += 0.75
	}
	function totalCallsTotal (){
		return calls.toFixed(2)
	}
	function totalSmsTotal(){
		return sms.toFixed(2)
	}
	function total(){
		return (calls + sms).toFixed(2)
	}
	function warningLevels(){
	if (total() >= 30){
		return 'warning'
	}
}
	function criticalLevels(){
	if (total() >= 50){
		return'critical'
	}
}
	return{
		forEachCall,
		forEachSms,
		totalCallsTotal,
		totalSmsTotal,
		warningLevels,
		criticalLevels,
		total
	}
}
