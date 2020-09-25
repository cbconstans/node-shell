const pwd = require("./pwd.js")
const ls = require('./ls.js')
const cat = require('./cat.js')

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  inputArray = input.split(' ');
  cmd = inputArray[0];
  argTwo = inputArray[1];
  
  if (cmd === "pwd") {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd === 'cat') {
    cat(argTwo);
  } else {
    process.stdout.write("You typed: " + cmd);
  }

  process.stdout.write("\nprompt > ");
});
