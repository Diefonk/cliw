//prints a string onto one line
function printString(aString) {
	var output = document.createElement("p");
	var text = document.createTextNode(aString);
	output.appendChild(text);
	document.getElementById("output").appendChild(output);
}

//prints an array of strings with each string on one line
function printArray(aArray) {
	var output = document.createElement("p");
	var text = document.createTextNode(aArray[0]);
	output.appendChild(text);
	for (var index = 1; index < aArray.length; index++) {
		var newline = document.createElement("br");
		output.appendChild(newline);
		text = document.createTextNode(aArray[index]);
		output.appendChild(text);
	}
	document.getElementById("output").appendChild(output);
}

//prints a random string from an array
function printRandom(aArray) {
	var index = random(aArray.length);
	printString(aArray[index]);
}
