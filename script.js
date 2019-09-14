//setting the welcome message
const welcomeMessage = "Welcome to this console website\nType 'help' for a list of commands";

//creating directories and files
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

//creating commands
createCommand("cd", "changes directory to specified directory", aInput => {
	if (aInput.length < 4) {
		print("No directory specified");
	} else {
		const path = aInput.substring(3, aInput.length);
		var newDirectory = currentDirectory.getDirectory(path);
		if (newDirectory !== null) {
			currentDirectory = newDirectory;
			setPrompt();
		} else {
			print(path + ": No such directory");
		}
	}
	return true;
});

createCommand("ls", "lists directories and files in current directory", aInput => {
	if (aInput !== "ls" && aInput !== "dir") {
		return false;
	}
	print(currentDirectory.getList());
	return true;
});

createCommand("dir", null, commands.ls);

createCommand("open", "opens the specified file", aInput => {
	if (aInput.length < 6) {
		print("No file specified");
	} else {
		const name = aInput.substring(5, aInput.length);
		var file = currentDirectory.getFile(name);
		if (typeof(file) === "string") {
			window.open(file, "_blank");
		} else {
			print(name + ": No such file");
		}
	}
	return true;
});

createCommand("clear", "clears the console", aInput => {
	if (aInput !== "clear") {
		return false;
	}
	location.reload();
	return true;
});

createCommand("xyzzy", null, aInput => {
	if (aInput !== "xyzzy") {
		return false;
	}
	print("Nothing happens");
	return true;
});

createCommand("help", "returns this list", aInput => {
	if (aInput !== "help") {
		return false;
	}
	for (let index = 0; index < commandList.length; index++) {
		print(commandList[index]);
	}
	return true;
});
