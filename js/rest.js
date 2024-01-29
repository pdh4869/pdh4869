//  rest parameters, argument 

function func1() {
	console.log(arguments);
}

function func2(...theArgs) {
	console.log(theArgs);
	console.log(theArgs.sort());
}

func1(2,6,4);
func2(2,6,4);
