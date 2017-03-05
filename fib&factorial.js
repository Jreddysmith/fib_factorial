function fib(num) {
	if(num <= 2) {
		return 1;
	} else {
		return fib(num - 1) + fib(num - 2);
	}
}


console.log(fib(5));


function factorial(num) {
	if(num === 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

console.log(factorial(4));
