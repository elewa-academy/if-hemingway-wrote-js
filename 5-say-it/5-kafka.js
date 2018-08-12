// Don’t edit your JavaScript according to the fashion; rather, follow your most intense obsessions mercilessly.

var kafka = function(){

	function sayIt(firstWord) {
		var words = [];
		return (function sayIt(word) {
			if (!word) { 
				try {
					return sayIt(); 
				} catch (e) {
					// quitting at last an unsettling recursion,
					// the array was transformed into a monstrous string 
					words = "there's been a hideous bug";
					return words;
				}
			} else { 
				words.push(word); 
				return sayIt;
			} 
		})(firstWord);
	}

}