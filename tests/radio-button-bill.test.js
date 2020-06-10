describe('RadioBtnBill', function(){
	it('should charge R2.75 for each new call', function(){
		var radioBtnBillFunction = RadioBtnBill();
		radioBtnBillFunction.forEachCallAdd();
		assert.equal(2.75, radioBtnBillFunction.newCallsTotal())
	});
	it('should update calls total to R11 for 4 calls made', function(){
		var radioBtnBillFunction2 = RadioBtnBill();
		radioBtnBillFunction2.forEachCallAdd();
		radioBtnBillFunction2.forEachCallAdd();
		radioBtnBillFunction2.forEachCallAdd();
		radioBtnBillFunction2.forEachCallAdd();
		assert.equal(11, radioBtnBillFunction2.newCallsTotal())
	});
	it('should charge R0.75 for each new sms', function(){
		var radioBtnBillFunction3 = RadioBtnBill();
		radioBtnBillFunction3.forEachSmsAdd();
		assert.equal(0.75, radioBtnBillFunction3.newSmsTotal())
	});
	it('should update sms total to R4.50 for 6 sms made', function(){
		var radioBtnBillFunction4 = RadioBtnBill();
		radioBtnBillFunction4.forEachSmsAdd();
		radioBtnBillFunction4.forEachSmsAdd();
		radioBtnBillFunction4.forEachSmsAdd();
		radioBtnBillFunction4.forEachSmsAdd();
		radioBtnBillFunction4.forEachSmsAdd();
		radioBtnBillFunction4.forEachSmsAdd();
		assert.equal(4.50, radioBtnBillFunction4.newSmsTotal())
	});


});