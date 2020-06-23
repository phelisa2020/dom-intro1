describe('The calculate bill Function', function(){
	it('should charge 2.75 for each call ',function(){
		 var billItems = phoneBill();

		billItems.totalPhoneBill('call');
		

		assert.equal(billItems.getTotal(),2.75)

		
	})

	it('should charge 0.75 for each sms',function(){
		 var billItems = phoneBill();

		billItems.totalPhoneBill('sms');
		

		assert.equal(billItems.getTotal(),0.75)

		
	})
	it('should be able separate  a strings of call and sms and become an array',function(){
		 var billItems = phoneBill();

		billItems.totalPhoneBill('sms, call, sms');
		

		assert.equal(billItems.getTotal(), 4.25 )

		
	})

	it('should be able to add both sms and call strings',function(){
		 var billItems = phoneBill();

		billItems.totalPhoneBill('sms, call, sms');
		

		assert.equal(billItems.getTotal(), 4.25 )

		
	})

	it('should change to warning when it is greater than R20', function(){
		var billItems = phoneBill();

		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		
		assert.equal('warning', billItems.warningLevels())
	});

	it('should change to critical when it is greater than R30', function(){
		var billItems = phoneBill();

		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		billItems.totalPhoneBill('call');
		
		
		assert.equal('critical', billItems.criticalLevels())
	});


	

	
	})