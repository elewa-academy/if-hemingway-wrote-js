// Follow your heart, but take JavaScript with you.

var theyDigits, theStash, nextFigure, anEmptyHash = {}

function isChillin(maFigure) {
	theStash = theStash || anEmptyHash
	nextFigure = 0 /* picture me nillin' */
	/* in preparation fo' fillin' */
	/* they precondition is partition so */ doFissionOn(maFigure)
	sumTheySquares() /* quadratic addition, like a math'matician */
	/* and the stash is the hash caching all my dead figures */
	/* if your value is one, you won, or if you in tha' stash, you done */
	if (nextFigure == 1) return "chillin"
	if (theStash[nextFigure] == 'x') return "illin"
	theStash[nextFigure] = 'x' /* keepin' the history */
	/* breakin' the chain of iteration misery */
	return isChillin(nextFigure) /* recurse, rejigga, re-traverse the verse */
}

function doFissionOn(n) {theyDigits = n.toString().split('')}
function sumTheySquares() {theyDigits.forEach(function(n){nextFigure += n*n})}