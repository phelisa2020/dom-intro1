describe('Text Bill', function(){
	it('should charge R2.75 for each call added', function(){
		var textBillFunction = textBill();
		textBillFunction.forEachCall();
		assert.equal(2.75, textBillFunction.totalCallsTotal())
	});
	 it('should update calls total to R11 for 4 calls made', function(){
	 	var textBillFunction = textBill();
	 	textBillFunction.forEachCall();
	 	textBillFunction.forEachCall();
	 	textBillFunction.forEachCall();
	 	textBillFunction.forEachCall();
	 	assert.equal(11, textBillFunction.totalCallsTotal())
	 });
	 it('should charge R0.75 for each new sms', function(){
	 	var textBillFunction = textBill();
	 	textBillFunction.forEachSms();
	 	assert.equal(0.75, textBillFunction.totalSmsTotal())
	 });
	 it('should charge total of R4.50 for 6 sms added', function(){
		var textBillFunction = textBill();
		textBillFunction.forEachSms();
		textBillFunction.forEachSms();
		textBillFunction.forEachSms();
		textBillFunction.forEachSms();
		textBillFunction.forEachSms();
		textBillFunction.forEachSms();
		assert.equal(4.50, textBillFunction.totalSmsTotal())
	});
	it('should able to add new sms and new call made', function(){
		var textBillFunction = textBill();
		textBillFunction.forEachSms();
		textBillFunction.forEachCall();
		assert.equal(3.5, textBillFunction.total())
	});

	it('should change to warning when it reaches R30', function(){
		var textBillFunction = textBill();

		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		assert.equal('warning', textBillFunction.warningLevels())
	});

	it('should change to critical when it reaches R50', function(){
		var textBillFunction = textBill();

		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		textBillFunction.forEachCall();
		assert.equal('critical', textBillFunction.criticalLevels())



});

	});
