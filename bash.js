const pwdFile = require("./pwd");
const lsFile = require("./ls");

// const catFile = require("./cat");
// pwdFile();
// lsFile();
// catFile();

process.stdout.write("prompt >");
process.stdin.on("data", data => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwdFile();
  } else if (cmd === "ls") {
    lsFile();
  }
});
