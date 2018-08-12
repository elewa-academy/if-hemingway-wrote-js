// When a man is tired of JavaScript he is tired of life.

/*  editor's note:
	the provided translation has been edited 
	for runnability
	editorial choices were made to match 
	the author's original style as closely as possible.
	original manuscripts were corroborated with 
	contemporary accounts to determine Johnson's 
	most probable stylistic choices
	the original text is provided below our translation
*/

// In which various NUMBERS are summon'd by
// means of ELECTRONICK CONJURY.
factorial = (n) => {
	// All argument is against it, yet all belief is for it.
	if (!n) return 1

	// Ingenious sophistry to prove the palp'bly OBVIOUS
	if (n == 1) return 1

	// Recursion (n.)
	// a program that calls 'pon itself in the manner of
	// a dog returning unto its VOMIT
	return n * factorial(n - 1)
}


/* original solution written in CoffeeScript

	# In which various NUMBERS are summon'd by
	# means of ELECTRONICK CONJURY.
	factorial = (n) ->
		# All argument is against it, yet all belief is for it.
		return 1 unless n

		# Ingenious sophistry to prove the palp'bly OBVIOUS
		return 1 if n is 1

		# Recursion (n.)
		# a program that calls 'pon itself in the manner of
		# a dog returning unto its VOMIT
		return n * factorial n – 1

*/