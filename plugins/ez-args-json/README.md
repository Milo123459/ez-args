```js
const program = require("ez-args");
const cli = new program();
cli.use(require("ez-args-json"));
//Save data to the home directory:
cli.json.set("key","value");
//Get data
cli.json.get("key");
//Check if data exists
cli.json.has("key");
//Delete data
cli.json.delete("key")
```
Thank you :)