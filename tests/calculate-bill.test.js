describe('The calculate bill Function', function(){
	it('should be able to set the call strings',function(){
		let calculate = CalculateBill();

		calculate.setStringCall('call');
		calculate.setStringCall('call');
		calculate.setStringSms('sms');

		assert.equal(2, calculate.getCallString())

		
	})

	it('should be able to set the sms strings',function(){
		let calculate = CalculateBill();

		calculate.setStringSms('sms');
		calculate.setStringSms('sms');
		calculate.setStringSms('sms');

		assert.equal(3, calculate.getSmsString())

		
	})

	it('should be able to set both sms and call strings',function(){
		let calculate = CalculateBill();

		calculate.setStringSms('sms');
		calculate.setStringSms('sms');
		calculate.setStringSms('sms');
		calculate.setStringCall('call');
		calculate.setStringCall('call');

		assert.equal(3, calculate.getSmsString())
		assert.equal(2, calculate.getCallString())
	})

	it('should be able to add 2.75 for each new call added',function(){
		let calculate = CalculateBill();

		calculate.addCall(2.75);
		calculate.addCall(2.75);
		calculate.addSms(0,75);

		assert.equal(5.5, calculate.getTotal())
	})

	it('should be able to add 0.75 for each new call added',function(){
		let calculate = CalculateBill();

		calculate.addCall(2.75);
		calculate.addCall(2.75);
		calculate.addSms(0,75);

		assert.equal(5.5, calculate.getTotal())
	})


	})