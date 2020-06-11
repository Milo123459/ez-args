```js
const program = require("ez-args");
const cli = new program();
cli.use(require("ez-args-json"));
//Save data to the home directory:
cli.set("key","value");
//Get data
cli.get("key");
//Check if data exists
cli.has("key");
//Delete data
cli.delete("key")
```
Thank you :)