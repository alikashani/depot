// in this example x is a variable set to a value
// x and bar point to different values
function foo(bar) {
	bar++;
	console.log('parameter passed after increment: '.toUpperCase(), bar)
}

var x = 5;
foo(x);
console.log('\nfoo is returning: '.toUpperCase() + x);

// but here y is set to a pointer
// and y and bar point to the SAME value
function foo2(anArray) {
	anArray[0]++;
	console.log('\nfoo2 is returning: '.toUpperCase() + anArray[0]);
}
var myArray = [ 10, 20, 30 ];
foo2(myArray)
console.log(myArray);

// var y = [5];
// foo2(y);
// console.log(y[0])
