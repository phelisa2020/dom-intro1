var textBill = function(){
	var calls = 0;
	var sms = 0;
	var totalAdd = 0;

	function forEachCall(){
		calls += 2.75;
		totalAdd += 2.75;
	}
	function forEachSms(){
		sms += 0.75
		totalAdd += 0.75
	}
	function totalCallsTotal (){
		return calls;
	}
	function totalSmsTotal(){
		return sms;
	}
	function warningLevel(){
		return 'warning'
	}
	function criticalLevel(){
		return'critical'
	}
	return{
		forEachCall,
		forEachSms,
		totalCallsTotal,
		totalSmsTotal,
		warningLevel,
		criticalLevel
	}
}
