// in this example x is a variable set to a value
// x and bar point to different values
function foo(bar) {
	bar++;
	console.log(bar)
}

var x = 5;
foo(x);
console.log(x);

// but here y is set to a pointer
// and y and bar point to the SAME value
function foo2(bar) {
	bar[0]++;
	console.log(bar[0]);
}

var y = [5];
foo2(y);
console.log(y[0])
