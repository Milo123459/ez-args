#!/usr/bin/env node
const ez = require(".");
let cli = new ez();
cli.command({
  name: "Hi!",
  description: "Hello",
  flags: ["-hi", "--hi"],
});
if (cli.parsed["hi!"]) {
  console.log("O!");
}
