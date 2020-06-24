describe('The calculate bill Function', function(){
	it('should charge call cost and sms cost string ',function(){
		 var billItems = totalPhoneBill();

		billItem.billItems('call,sms,call');
		

		assert.equal(billItem.billTotal,6.25)

		
	})
});
