ez-args
===
Parse args with ease!
```js
const ez = require('ez-args');
const program = new ez();
program.command({
    name: "test",
    description: "Test stuff!",
    flags: ["-t","--t"]
})
program.start();
if(program.parsed.test){
    console.log("You called the test flag!")
} else {
    console.log("You did not call the the test flag")
}
```
This code created a program, adds a command and will check some values. NOTE: program.parsed returns all expected values which exist. Also note that program.start(); has to be below all of the command adding.<br>
program.parsed.test works because you added the command with the name test, this works like this for all other commands.