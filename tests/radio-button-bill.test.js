describe('RadioBtnBill', function(){
	it('should charge R2.75 for each new call', function(){
		var radioButton = radioBill();
		radioButton.forEachCallAdd();
		assert.equal(2.75, radioButton.newCallsTotal())
	});
	it('should update calls total to R11 for 4 calls made', function(){
		var radioButton = radioBill();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		assert.equal(11, radioButton.newCallsTotal())
	});
	it('should charge R0.75 for each new sms', function(){
		var radioButton = radioBill();
		radioButton.forEachSmsAdd();
		assert.equal(0.75, radioButton.newSmsTotal())
	});
	it('should update sms total to R4.50 for 6 sms made', function(){
		var radioButton = radioBill();
		radioButton.forEachSmsAdd();
		radioButton.forEachSmsAdd();
		radioButton.forEachSmsAdd();
		radioButton.forEachSmsAdd();
		radioButton.forEachSmsAdd();
		radioButton.forEachSmsAdd();
		assert.equal(4.50, radioButton.newSmsTotal())
	});
	it('should able to add new sms and new call made', function(){
		var radioButton = radioBill();
		radioButton.forEachSmsAdd();
		radioButton.forEachCallAdd();
		assert.equal(3.5, radioButton.finalTotal())
	});

	it('should change to warning when it reaches R30', function(){
		var radioButton = radioBill();

		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		assert.equal('warning', radioButton.warningLevel())
	});

	it('should change to critical when it reaches R50', function(){
		var radioButton = radioBill();

		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		radioButton.forEachCallAdd();
		assert.equal('critical', radioButton.criticalLevel())
	});


});