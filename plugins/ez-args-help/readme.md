```js
const program = require('ez-args')
const cli = new program();
cli.use(require('ez-args-help'));
cli.start();
//Here is a simple help command, setup in seconds