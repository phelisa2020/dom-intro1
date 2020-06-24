var billWithSettings = function (){
	var theCallCost = 0
	var theSmsCost = 0
	var theWarningLevel = 0
	var theCriticalLevel = 0
	var callCostTotal = 0
	var smsCostTotal =0


	function setCallCost(callCost){
		theCallCost = callCost;

	}
	function getCallCost(){
		return theCallCost;
	}
	function setSmsCost(smsCost){
		theSmsCost = smsCost;

	}
	function getSmsCost(){
		return theSmsCost;
	}
	function setWarningLevel(warningLevel){
		theWarningLevel = warningLevel;

	}
	function getWarningLevel(){
		return theWarningLevel;
	}
	function setCriticalLevel(criticalLevel){
		theCriticalLevel = criticalLevel;

	}
	function getCriticalLevel(){
		return theCriticalLevel;
	}

 	function makeCall(){
 		 if(!hasReachedCriticalLevel()){
			callCostTotal += theCallCost
 		 }
		
 	}
 	function getTotalCost(){
 		
 			 return (callCostTotal + smsCostTotal).toFixed(2)
 	}

 	function getTotalCallCost(){
 		return callCostTotal.toFixed(2)

 	}
 	function getTotalSmsCost(){
 		
		return smsCostTotal.toFixed(2)

 	}
 	function sendSms(){
 		 if(!hasReachedCriticalLevel()){
 			smsCostTotal += theSmsCost
		 }
	
 	}

 	 function hasReachedCriticalLevel(){
      if(getTotalCost() >= getCriticalLevel()){
        return 'critical'
      }

 	 }

 	function totalClassName(){
 		if(hasReachedCriticalLevel()){
 			return 'critical'
 		}

 		else if(getTotalCost() >= getWarningLevel()){
 			return 'warning'
 		}	
 	}
	return {
		setCallCost,
		getCallCost,
		setSmsCost,
		getSmsCost,
		setWarningLevel,
		getWarningLevel,
		setCriticalLevel,
		getCriticalLevel,
		makeCall,
		getTotalCost,
		getTotalCallCost,
		getTotalSmsCost,
		sendSms,
		 totalClassName,
		 hasReachedCriticalLevel,

	}
}