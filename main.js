//setting the welcome message
const welcomeMessage = "Welcome to diefonk.net\nType 'help' for a list of commands";

//creating directories and files
var games = new Directory("games");
games.addFile("https://diefonk.itch.io/pizza-dress-up", "pizzadressup.js");
games.addFile("https://diefonk.itch.io/potato-simulator-2014-remix", "potatosimulator2014remix.js");
games.addFile("https://diefonk.itch.io/9in1", "9in1.js");
games.addFile("https://diefonk.itch.io/beast-city-dreamers", "beastcitydreamers.bitsy");
games.addFile("https://diefonk.itch.io/concern", "growingconcern.cs");
games.addFile("https://diefonk.itch.io/recycle", "recycleecho.cs");
games.addFile("https://diefonk.itch.io/you-reached-avalon", "youreachedavalon.gd");
games.addFile("https://diefonk.itch.io/grim-folly", "grimfolly.js");
games.makeList();

var other = new Directory("other");
other.addFile("https://github.com/Diefonk/processing-projects", "processingprojects.pde");
other.addFile("https://github.com/Diefonk/baebot", "baebot.js");
other.addFile("https://github.com/Diefonk/cliw", "cliw.js");
other.addFile("https://epithet.glitch.me", "epithet.html");
other.addFile("/hsrewind", "hsrewind.js");
other.addFile("/jadestuck", "jadestuck.html");
other.makeList();

var lists = new Directory("lists");
lists.addFile("https://www.imdb.com/list/ls090150004/", "movies.imdb");
lists.addFile("https://www.imdb.com/list/ls081594137/", "series.imdb");
lists.addFile("https://myanimelist.net/animelist/Diefonk", "anime.mal");
lists.addFile("https://myanimelist.net/mangalist/Diefonk", "manga.mal");
lists.addFile("https://www.goodreads.com/review/list/120037719?shelf=read", "books+comics.gr");
lists.addFile("https://itch.io/c/846223/have-playedread", "games+stories.itch.io");
lists.addFile("https://steamcommunity.com/id/diefonk/games/", "games.steam");
lists.addFile("https://archiveofourown.org/users/Diefonk/bookmarks", "fanfiction.ao3");
lists.makeList();

currentDirectory = new Directory("index");
currentDirectory.addFile("https://twitter.com/Diefonk", "twitter.url");
currentDirectory.addFile("https://www.youtube.com/user/Diefonk", "youtube.url");
currentDirectory.addFile("https://blog.diefonk.net", "tumblr.url");
currentDirectory.addFile("https://diefonk.itch.io", "itch.io.url");
currentDirectory.addFile("https://github.com/Diefonk", "github.url");
currentDirectory.addFile("https://soundcloud.com/diefonk", "soundcloud.url");
currentDirectory.addFile("/rss.xml", "rss.xml");
currentDirectory.addDirectory(games);
currentDirectory.addDirectory(other);
currentDirectory.addDirectory(lists);
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

createCommand("make me a sandwich", null, () => {
	print("What? Make it yourself.");
});

createCommand("sudo make me a sandwich", null, () => {
	print("Okay.");
});

createCommand("send nudes", null, () => {
	print("No.");
});

createCommand("send noots", null, () => {
	print("NOOT NOOT");
});

createCommand("help", "returns this list", () => {
	for (let index = 0; index < commandList.length; index++) {
		print(commandList[index]);
	}
});
