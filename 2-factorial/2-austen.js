// A programmer, especially if she has the misfortune of knowing anything, should conceal it as well as she can.

var austen = function() {

	var factorial = (function() {
		//She declared the ledger to be very plain. But with the happiest prospects!
		var ledger = {};

		return function reckoning(quantity) { 
			if (isNaN(quantity)) {
				console.log("I have not the pleasure of understanding you."); 
				return;
			}
			//It is a truth universally acknowledged that two values can only be judged
			//truly agreeable by means of the treble equal symbol...
			if (quantity === 0) {
				return 1;
			}
			//Mr Crockford teaches that we should be wary of inherited property...
			if (ledger.hasOwnProperty(quantity)) {
				return ledger[quantity];
			}
			//No sooner was each function finished than the next one began!
			return ledger[quantity] = quantity * reckoning(quantity - 1);
		};
	})();

};