class Directory {
	constructor(aName) {
		this.name = aName;
		this.files = {};
		this.directories = {};
		this.fileList = [];
		this.directoryList = [];
		this.list = "";
	}

	getName() {
		return this.name;
	}

	addFile(aFile, aName) {
		this.files[aName.toLowerCase()] = aFile;
		this.fileList.push(aName);
	}

	getFile(aName) {
		return this.files[aName.toLowerCase()];
	}

	addDirectory(aDirectory) {
		aDirectory.setParent(this);
		this.directories[aDirectory.getName().toLowerCase()] = aDirectory;
		this.directoryList.push(aDirectory.getName());
	}

	getDirectory(aPath) {
		while (aPath.lastIndexOf("/") === aPath.length - 1) {
			aPath = aPath.substring(0, aPath.length - 1);
		}
		let index = aPath.indexOf("/");
		while (index === 0) {
			aPath = aPath.substring(1, aPath.length);
			index = aPath.indexOf("/");
		}
		if (index > 0) {
			let directory = aPath.substring(0, index).toLowerCase();
			if (directory in this.directories) {
				aPath = aPath.substring(index + 1, aPath.length);
				return this.directories[directory].getDirectory(aPath);
			}
		} else {
			let directory = aPath.toLowerCase();
			if (directory in this.directories) {
				return this.directories[directory];
			}
		}
		return null;
	}

	setParent(aParent) {
		this.directories[".."] = aParent;
	}

	makeList() {
		this.fileList.sort();
		this.directoryList.sort();
		this.list = "";
		for (let index = 0; index < this.directoryList.length; index++) {
			this.list += this.directoryList[index] + "/\n";
		}
		for (let index = 0; index < this.fileList.length; index++) {
			this.list += this.fileList[index] + "\n";
		}
	}

	getList() {
		return this.list;
	}
}
