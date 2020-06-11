const {homedir} = require('os');
const HOMEDIR = homedir();
const PATH = `${HOMEDIR}/ez-args.json`;
module.exports = PATH;