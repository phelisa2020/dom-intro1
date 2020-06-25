describe('The calculate bill Function', function(){
	it('should be able to give you the total of call and sms string entered ',function(){

		assert.equal(totalPhoneBill('call,sms,call,call,call'),  11.75 ) 
		
	})

	it('should be able to give you the total of call cost ',function(){

		assert.equal(totalPhoneBill('call'),  2.75 ) 
		
	})

	it('should be able to give you the total of sms cost ',function(){

		assert.equal(totalPhoneBill('sms'),  0.75 ) 
		
	})
});

