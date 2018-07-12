const prompt = "cmd> ";
//var commandHistory = [];
//var currentCommand = 0;

//is called when the page loads
function init() {
	printString("Welcome");
	document.getElementById("prompt").innerHTML = prompt;
	focusInput();
}

//is called when user presses enter, this is where the main stuff happens
function handleInput(aEvent) {
	if (aEvent.keyCode === 13) {
		aEvent.preventDefault();
		//commandHistory.push(document.getElementById("input").value);
		//currentCommand = commandHistory.length + 1;
		printString(prompt + document.getElementById("input").value);
		const input = document.getElementById("input").value.toLowerCase();
		if (input === "printstring") {
			printString("This prints a string onto one line");
		} else if (input === "printarray") {
			printArray(["This prints", "an array", "of strings"]);
		} else if (input === "printrandom") {
			printRandom(["This prints", "a random string", "from an array"]);
		} else if (input === "printlines") {
			printLines("This prints\na string\nwith support for\nnewline characters");
		} else if (input === "clear") {
			location.reload();
		} else if (input === "xyzzy") {
			printString("Nothing happens");
		} else if (input === "") {
			//do nothing
		} else {
			printString("Command not found");
		}
		document.getElementById("input").value = "";
		window.scrollTo(0, document.body.scrollHeight);
	} else if (aEvent.keyCode === 38) {
		printString("up");
	} else if (aEvent.keyCode === 40) {
		printString("down");
	}
	/*else if (aEvent.keyCode === 38) {
		aEvent.preventDefault();
		if (currentCommand === commandHistory.length + 1) {
			commandHistory.push(document.getElementById("input").value);
			currentCommand--;
		}
		currentCommand--;
		if (currentCommand < 0) {
			currentCommand = 0;
		}
		document.getElementById("input").value = commandHistory[currentCommand];
	}
	else if (aEvent.keyCode === 40) {
		aEvent.preventDefault();
		currentCommand++;
		if (currentCommand === commandHistory.length) {
			currentCommand = commandHistory.length - 1;
		} else if (currentCommand > commandHistory.length) {
			currentCommand = commandHistory.length + 1;
			return;
		}
		document.getElementById("input").value = commandHistory[currentCommand];
	}*/
	//TODO history by pressing arrow keys
}

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
	var index = Math.floor(Math.random() * aArray.length);
	var output = document.createElement("p");
	var text = document.createTextNode(aArray[index]);
	output.appendChild(text);
	document.getElementById("output").appendChild(output);
}

//prints a string on multiple lines if there are newline characters
function printLines(aString) {
	var output = document.createElement("p");
	var text;
	var newlineIndex = aString.indexOf("\n");
	while (newlineIndex >= 0) {
		text = document.createTextNode(aString.substring(0, newlineIndex));
		output.appendChild(text);
		var newline = document.createElement("br");
		output.appendChild(newline);
		aString = aString.substring(newlineIndex + 1, aString.length);
		newlineIndex = aString.indexOf("\n");
	}
	text = document.createTextNode(aString);
	output.appendChild(text);
	document.getElementById("output").appendChild(output);
}

//gives focus to the input field
function focusInput() {
	document.getElementById("input").focus();
}
