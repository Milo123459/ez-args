const {homedir} = require('os');
const HOMEDIR = homedir();
const PATH = `${HOMEDIR}/{n}.ez-args.json`;
module.exports = PATH;