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
createArgumentCommand("cd", "changes directory to specified directory", aInput => {
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
});

createCommand("ls", "lists directories and files in current directory", () => {
	print(currentDirectory.getList());
});

createCommand("dir", null, commands.ls);

createArgumentCommand("open", "opens the specified file", aInput => {
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
});

createCommand("clear", "clears the console", () => {
	location.reload();
});

createCommand("xyzzy", null, () => {
	print("Nothing happens");
});

createCommand("help", "returns this list", () => {
	for (let index = 0; index < commandList.length; index++) {
		print(commandList[index]);
	}
});
