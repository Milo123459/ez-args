```js
const program = require("ez-args");
const cli = new program();
cli.use(require("ez-args-help"),{
    helpText: 'My help text, the commands get listed below'
});
//Note helpText is optional
cli.start();
//Here is a simple help command, setup in seconds
```
