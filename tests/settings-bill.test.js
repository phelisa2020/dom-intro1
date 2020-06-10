describe('The settingWithBill Function', function(){
	it('should be able to set the call cost',function(){
		let settingsBill = billWithSettings();

		settingsBill.setCriticalLevel(10);
		settingsBill.setCallCost(1.85);
		assert.equal(1.85, settingsBill.getCallCost())

		let settingsBill2 = billWithSettings();
		settingsBill2.setCallCost(2.75);
		assert.equal(2.75, settingsBill2.getCallCost())

	})

	it('should be able to set the sms cost',function(){
		let settingsBill = billWithSettings();
		settingsBill.setSmsCost(0.85);
		assert.equal(0.85, settingsBill.getSmsCost())

		let settingsBill2 = billWithSettings();
		settingsBill2.setSmsCost(0.75);
		assert.equal(0.75, settingsBill2.getSmsCost())

	})

	it('should be able to set the sms and call cost',function(){
		let settingsBill = billWithSettings();

		settingsBill.setSmsCost(0.85);
		settingsBill.setCallCost(1.85);

		assert.equal(0.85, settingsBill.getSmsCost())
		assert.equal(1.85, settingsBill.getCallCost())

		let settingsBill2 = billWithSettings();

		settingsBill2.setSmsCost(0.75);
		settingsBill2.setCallCost(1.75);

		assert.equal(0.75, settingsBill2.getSmsCost())
		assert.equal(1.75, settingsBill2.getCallCost())

	})

	it('should be able to set the warning level',function(){
		let settingsBill = billWithSettings();

		settingsBill.setWarningLevel(20);

		assert.equal(20, settingsBill.getWarningLevel())
		
	})

	it('should be able to set the critical level',function(){
		let settingsBill = billWithSettings();

		settingsBill.setCriticalLevel(30);

		assert.equal(30, settingsBill.getCriticalLevel())
		
	})

	it('should be able to set the critical & warning level',function(){
		let settingsBill = billWithSettings();

		settingsBill.setCriticalLevel(25);
		settingsBill.setWarningLevel(15);

		assert.equal(25, settingsBill.getCriticalLevel())
		assert.equal(15, settingsBill.getWarningLevel())
		
	})

	it('should be able to use the call cost set',function(){
		let settingsBill = billWithSettings();

		settingsBill.setCallCost(2.75);
		settingsBill.setSmsCost(0.85);

		settingsBill.makeCall();
		settingsBill.makeCall();
		settingsBill.makeCall();

		settingsBill.setCriticalLevel(10);
		assert.equal(8.25, settingsBill.getTotalCost());
		assert.equal(8.25, settingsBill.getTotalCallCost());
		assert.equal(0.00, settingsBill.getTotalSmsCost());
	})

	it('should be able to use the call cost set for 2 call at 1.35 each',function(){
		let settingsBill = billWithSettings();
		
		settingsBill.setCallCost(1.35);
		settingsBill.setSmsCost(0.85);

		settingsBill.makeCall();
		settingsBill.makeCall();

		settingsBill.setCriticalLevel(10);
		assert.equal(2.70, settingsBill.getTotalCost())
		assert.equal(2.70, settingsBill.getTotalCallCost())
		assert.equal(0.00, settingsBill.getTotalSmsCost())
		
		
	})

	it('should be able to send 2 smss at 0.85 each',function(){
		let settingsBill = billWithSettings();

		settingsBill.setCallCost(1.35);
		settingsBill.setSmsCost(0.85);

		settingsBill.sendSms();
		settingsBill.sendSms();

		settingsBill.setCriticalLevel(10);
		assert.equal(1.70, settingsBill.getTotalCost())
		assert.equal(0.00, settingsBill.getTotalCallCost())
		assert.equal(1.70, settingsBill.getTotalSmsCost())
		
	})
	
	it('should be able to send 2 smss at 0.85 each & make 1 call for 1.35',function(){
		let settingsBill = billWithSettings();
		
		settingsBill.setCallCost(1.35);
		settingsBill.setSmsCost(0.85);

		settingsBill.sendSms();
		settingsBill.sendSms();
		settingsBill.makeCall();
		settingsBill.setCriticalLevel(10);

		assert.equal(3.05, settingsBill.getTotalCost())
		assert.equal(1.35, settingsBill.getTotalCallCost())
		assert.equal(1.70, settingsBill.getTotalSmsCost())
		
	})

	it('should be return a class name of warning if warning level is reached',function(){
		let settingsBill = billWithSettings();
		 
		settingsBill.setCallCost(1.35);
		settingsBill.setSmsCost(0.85);
		settingsBill.setWarningLevel(5);
		settingsBill.setCriticalLevel(10);

		settingsBill.makeCall();
		settingsBill.makeCall();
		settingsBill.makeCall();
		settingsBill.makeCall();

		settingsBill.setCriticalLevel(10);
		assert.equal('warning', settingsBill.totalClassName())	
	})

	it('should be return a class name of critical if critical level has been reached',function(){
		let settingsBill = billWithSettings();
		settingsBill.setCriticalLevel(10);

		settingsBill.setCallCost(2.50);
		settingsBill.setSmsCost(0.85);
		settingsBill.setWarningLevel(10);

		settingsBill.makeCall();
		settingsBill.makeCall();
		settingsBill.makeCall();
		settingsBill.makeCall();
		
		assert.equal('critical', settingsBill.totalClassName())
		
		
		
	})

	it('should stop the total call cost from increasing when the critical level has been reached',function(){
		let settingsBill = billWithSettings();

		settingsBill.setCallCost(2.50);
		settingsBill.setSmsCost(0.85);
		

		settingsBill.makeCall();
		settingsBill.makeCall();
		settingsBill.makeCall();
		settingsBill.makeCall();
		settingsBill.makeCall();

		settingsBill.setCriticalLevel(10);
		assert.equal('critical', settingsBill.totalClassName())
		assert.equal(10, settingsBill.getTotalCallCost())
		
		
		
	})

	it('should stop the total call cost from increasing when the critical level has been reached',function(){
		let settingsBill = billWithSettings();

		settingsBill.setCallCost(2.50);
		settingsBill.setSmsCost(0.85);
		settingsBill.setWarningLevel(8);
		

		settingsBill.makeCall();
		settingsBill.makeCall();
		settingsBill.makeCall();
		settingsBill.makeCall();
		settingsBill.setCriticalLevel(10);
		assert.equal('critical', settingsBill.totalClassName())
		assert.equal(10, settingsBill.getTotalCallCost())
		
		settingsBill.setCriticalLevel(20);
		assert.equal('warning', settingsBill.totalClassName())
		settingsBill.makeCall();
		settingsBill.makeCall();
		assert.equal(15, settingsBill.getTotalCallCost())

		
		
	})
})
