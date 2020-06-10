#!/usr/bin/env node
const ez = require('.');
let cli = new ez();
cli.command({
    name: 'Hi!',
    description: 'Hello',
    flags: ["-hi","--hi"],
    required: true
})
cli.start();