# ez-args

Parse args with ease!

```js
const ez = require("ez-args");
const program = new ez();
program.command({
  name: "test",
  description: "Test stuff!",
  flags: ["-t", "--t"],
  cb: (data) => {
    console.log(data) //Will return what ever value recieved from calling the flag
  },
  required: true //You will have to call the test flag to execute the code.
});
//Description and cb are not required.
program.start();
if (program.parsed.test) {
  console.log("You called the test flag!");
} else {
  console.log("You did not call the the test flag");
}
```

This code created a program, adds a command and will check some values. NOTE: program.parsed returns all expected values which exist. Also note that program.start(); has to be below all of the command adding.<br>
program.parsed.test works because you added the command with the name test, this works like this for all other commands.<br><br>
**Plugins**
```js
program.use(require('my-plugin-module'))
//Making your module:
//This could be in another file:
module.exports = function(parser){
  //Parser as every property the ez client has so for example you can do:
  parser.command({
    name: 'plugin',
    description: 'My plugin',
    flags: ["-p","--p"]
  })
}
//In order for your plugin to work, you have to export a function, not an object, just a function!
```