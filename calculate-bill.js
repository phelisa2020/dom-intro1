function  CalculateBill(){
	var call = 0
	var sms = 0
	function setStringCall(){
		call++
	}
	function setStringSms(){
		sms++
	}
	function getCallString(){
		return call
	}
	function getSmsString(){
		return sms
	}
	function addCall(){
		call +=2.75
	}
	function addSms(){
		sms +=0.75
	}
	function getTotal(){
		return call
	}
	return{
		setStringCall,
		setStringSms,
		getCallString,
		getSmsString,
		addSms,
		addCall,
		getTotal
	}
}