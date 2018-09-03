// It is better to learn JavaScript late than never to learn it at all.

var conan_doyle = function() {

	"use strict";
	//In solving a problem of this sort, the grand thing is to reason backwards... 

	//Some things are easier known than explained.
	var caseHistory = new Object({2:2, 6:3});

	function unfactorial(evidence){
		//It is my belief, Watson, founded upon my experience, that a 
		//mathematician would never chase the factorial of zero.
		if (evidence === 1) { return 1; }

		//Seek out logical precedence.
		if (caseHistory[evidence]){
			//Elementary!
			return caseHistory[evidence]; 
		}

		//Eliminate the impossible.
		if (evidence === 0 || evidence % 24 !== 0) { 
			return "charlatans!";
		}
		
		//At this point deductions may be drawn.
		var theDeduction, numerator = evidence, denominator = 1; 
		while (numerator % denominator === 0) {
			numerator = numerator / denominator++; 
			if (numerator === denominator) {
				theDeduction = numerator; 
			}
		}

		theDeduction = theDeduction || "impostors";

		//What one man can invent, another can discover.
		caseHistory[evidence] = theDeduction;
		//What remains, however improbable, must be the truth.
		return theDeduction; 
	}

};