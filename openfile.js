var shell = require("shelljs");
const filename = "data.txt";
shell.echo("hello world");
shell.exec("node --version");
shell.exec(`code ${filename}`);
