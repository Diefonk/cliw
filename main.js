//setting the welcome message
const welcomeMessage = "Welcome to diefonk.net\nType 'help' for a list of commands";

//creating directories and files
var games = new Directory("games");
games.addFile("https://diefonk.itch.io/pizza-dress-up", "pizzadressup.js");
games.addFile("https://diefonk.itch.io/potato-simulator-2014-remix", "potatosimulator2014remix.js");
games.addFile("https://diefonk.itch.io/concern", "growingconcern.cs");
games.addFile("https://diefonk.itch.io/you-reached-avalon", "youreachedavalon.gd");
games.addFile("https://diefonk.itch.io/grim-folly", "grimfolly.js");
games.addFile("https://diefonk.itch.io/i-was-reincarnated-in-an-rpg-but-i-dont-want-to-fight-the-monsters", "smudge.gd");
games.makeList();

var other = new Directory("other");
other.addFile("https://github.com/Diefonk/baebot", "baebot.js");
other.addFile("https://github.com/Diefonk/cliw", "cliw.js");
other.addFile("https://epithet.glitch.me", "epithet.html");
other.addFile("/hsrewind", "hsrewind.js");
other.addFile("/jadestuck", "jadestuck.html");
other.addFile("https://diefonk.itch.io/pocket-reader", "pocketreader.pdx");
other.addFile("https://diefonk.itch.io/satellite", "satellite.pdx");
other.addFile("/images", "images.png");
other.makeList();

var profiles = new Directory("profiles");
profiles.addFile("https://twitter.com/Diefonk", "twitter.url");
profiles.addFile("https://www.youtube.com/user/Diefonk", "youtube.url");
profiles.addFile("https://diefonk.tumblr.com", "tumblr.url");
profiles.addFile("https://diefonk.itch.io", "itch.io.url");
profiles.addFile("https://github.com/Diefonk", "github.url");
profiles.addFile("https://soundcloud.com/diefonk", "soundcloud.url");
profiles.makeList();

currentDirectory = new Directory("index");
currentDirectory.addFile("/rss.xml", "rss.xml");
currentDirectory.addDirectory(games);
currentDirectory.addDirectory(other);
currentDirectory.addDirectory(profiles);
currentDirectory.makeList();

//creating commands
createArgumentCommand("cd", "changes directory to specified directory", aInput => {
	if (aInput.length < 4) {
		io.print("No directory specified");
	} else {
		const path = aInput.substring(3, aInput.length);
		var newDirectory = currentDirectory.getDirectory(path);
		if (newDirectory !== null) {
			currentDirectory = newDirectory;
			setPrompt();
		} else {
			io.print(path + ": No such directory");
		}
	}
});

createCommand("ls", "lists directories and files in current directory", () => {
	io.print(currentDirectory.getList());
});

createCommand("dir", null, commands.ls);

createArgumentCommand("open", "opens the specified file", aInput => {
	if (aInput.length < 6) {
		io.print("No file specified");
	} else {
		const name = aInput.substring(5, aInput.length);
		var file = currentDirectory.getFile(name);
		if (typeof(file) === "string") {
			window.open(file, "_blank");
		} else {
			io.print(name + ": No such file");
		}
	}
});

createCommand("clear", "clears the console", () => {
	location.reload();
});

createCommand("xyzzy", null, () => {
	io.print("Nothing happens");
});

createCommand("make me a sandwich", null, () => {
	io.print("What? Make it yourself.");
});

createCommand("sudo make me a sandwich", null, () => {
	io.print("Okay.");
});

createCommand("send nudes", null, () => {
	io.print("No.");
});

createCommand("send noots", null, () => {
	io.print("NOOT NOOT");
});

createCommand("help", "returns this list", () => {
	for (let index = 0; index < commandList.length; index++) {
		io.print(commandList[index]);
	}
});
