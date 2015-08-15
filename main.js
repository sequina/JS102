function (array) {
	return newarray.sorted();
});


function array(numbers) {
	for (var i = 0; i <= array.length; i++) {
		var currentArray = array.json[i];
	};
	console.log(currentArray);
});

$(".button").click(function() {
	$.ajax({
			url: "./array.json"
		}).done(label.value); 
});


