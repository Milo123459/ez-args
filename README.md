# ez-args

Parse args with ease!

```js
const ez = require("ez-args");
const program = new ez();
program.command({
  name: "test",
  description: "Test stuff!",
  flags: ["-t", "--t"],
});
program.start();
if (program.parsed.test) {
  console.log("You called the test flag!");
} else {
  console.log("You did not call the the test flag");
}
program.use(require("<plugin or file>"),options);
//Use a plugin which will have standard commands, or you can require a file.
//To create a plugin, go into your plugin folder and do the following:
module.exports = (parser, options) => {
  //Put your code here, parser is the program and has all properties
  //Options is an object which will take in all data passed through in the second param when using <program>.use
  program.command({
    name: "test",
    description: "Test stuff!",
    flags: ["-t", "--t"],
    code: (data) => {
      //You can now use a callback for executing code when the flag is called
    },
  });
  //Want to add functions to it via a plugin, you can do this:
  return {
    callName: 'test', //callName is required so you can do; program.<callname>.<method>;
    method1(){
      //do code
    }
    method2(){
      //Do some other code. You can then use these functions in your main cli where you are using the module like so:
      //program.test.method1();
      //Please note this is an example!
    }
  }
};
```

This code created a program, adds a command and will check some values. NOTE: program.parsed returns all expected values which exist. Also note that program.start(); has to be below all of the command adding.<br>
program.parsed.test works because you added the command with the name test, this works like this for all other commands.<br>
**Official plugins:** ez-args-help | ez-args-json <br>
These plugins are all on NPM.
