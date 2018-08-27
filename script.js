var prompt;
var currentDirectory;

//is called when the page loads
function init() {
	var newFolder = new Directory("New Folder");

	var trash = new Directory("trash");
	trash.addFile("https://diefonk.itch.io/pizza-dress-up", "Pizza.js");
	trash.addFile("https://www.youtube.com/watch?v=zwTw--dh9jM", "Potato.mp4");
	trash.addDirectory(newFolder);
	trash.makeList();

	currentDirectory = new Directory("index");
	currentDirectory.addFile("https://github.com/Diefonk", "Diefonk.git");
	currentDirectory.addDirectory(trash);
	currentDirectory.makeList();

	print("Welcome to this console website\nType 'help' for a list of commands");
	setPrompt();
	focusInput();
}

//is called when user presses enter, this is where the main stuff happens
function handleInput(aEvent) {
	if (aEvent.keyCode === 13) {
		aEvent.preventDefault();
		
		print(prompt + document.getElementById("input").value);
		const input = document.getElementById("input").value.toLowerCase();
		document.getElementById("input").value = "";

		if (input === "help") {
			print("cd - changes directory to specified directory");
			print("ls - lists directories and files in current directory");
			print("open - opens the specified file");
			print("clear - clears the console");
			print("help - returns this list");
		} else if (input.substring(0, 3) === "cd " || input === "cd") {
			if (input.length < 4) {
				print("No directory specified");
			} else {
				const path = input.substring(3, input.length);
				var newDirectory = currentDirectory.getDirectory(path);
				if (newDirectory !== null) {
					currentDirectory = newDirectory;
					setPrompt();
				} else {
					print(path + ": No such directory");
				}
			}
		} else if (input === "ls") {
			print(currentDirectory.getList());
		} else if (input.substring(0, 5) === "open " || input === "open") {
			if (input.length < 6) {
				print("No file specified");
			} else {
				const name = input.substring(5, input.length);
				var file = currentDirectory.getFile(name);
				if (typeof(file) === "string") {
					window.open(file, "_blank");
				} else {
					print(name + ": No such file");
				}
			}
		} else if (input === "clear") {
			location.reload();
		} else if (input === "xyzzy") {
			print("Nothing happens");
		} else if (input === "") {
			//do nothing
		} else {
			print("Command not found\nType 'help' for a list of commands");
		}
		window.scrollTo(0, document.body.scrollHeight);
	}
}

//prints a string and makes sure newline characters are handled correctly
function print(aString) {
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

//gets a random number in the range [0, aMax)
function random(aMax) {
	return Math.floor(Math.random() * aMax);
}

//gives focus to the input field
function focusInput() {
	document.getElementById("input").focus();
}

//sets the prompt to show the current directory
function setPrompt() {
	prompt = "guest:" + currentDirectory.getName() + "$ ";
	document.getElementById("prompt").innerHTML = prompt;
}

//old functions, not recommended

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
