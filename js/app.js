$(document).ready(function(){
	//num = +num;
	while (isNaN(num) || num <= 0) {
		var num = parseInt(prompt("Please enter a positive whole number", "0"));
		alert('You entered: ' + num);
	}
	FizzBuzz(num);
});

var FizzBuzz = function (num) {
	// first solution
	for (var i=1;i<num+1;i++) {
		if ((i % 3) == 0 && (i % 5) == 0) {
			$("ul").append("<li>FizzBuzz</li>");
		} else if ((i % 3) == 0) {
			$("ul").append("<li>Fizz</li>");
		} else if ((i % 5) == 0) {
			$("ul").append("<li>Buzz</li>");
		} else {
			$("ul").append("<li>"+i+"</li>");
		}
	}

	// second solution
	for (var i=1;i<num+1;i++) {
		console.log(i);
		var list_item = "";
		if ((i % 3) == 0) {
			list_item = "Fizz";
		}
		if ((i % 5) == 0) {
			list_item += "Buzz";
		}
		if (!list_item || 0 === list_item.length) {
			list_item = i;
		}
		$("ul").append("<li>"+list_item+"</li>");
	}
};
