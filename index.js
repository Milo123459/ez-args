const utils = require("./utils");
class Command {
  constructor(options) {
    let o = options;
    this.name = o.name;
    this.flags = o.flags;
    this.description = o.description;
    this.code = o.code;
  }
}
class Typer {
  constructor() {
    this.commands = [];
    this.result = {};
    this.res = [];
  }
  /**
   *
   * @param {Object} options Options of the command
   * @param {String} options.name The name of the command
   * @param {Array} options.flags The flags of the command
   * @param {String} [options.description] The description of the command
   * @param {Function} [options.code] A callback to be initiated directly in the command
   */
  command(options) {
    this.commands.push(new Command(options));
  }
  /**
   * @method
   * @description Start the system.
   */
  start() {
    process.argv.map((arg, i) => {
      this.commands.map((cmd, y) => {
        if (cmd.flags.includes(arg)) {
          if (cmd.code) {
            cmd.code(
              process.argv[i + 1]
                ? process.argv[i + 1].startsWith("-")
                  ? true
                  : process.argv[i + 1]
                  ? process.argv[i + 1]
                  : true
                : true
            );
          }
          this.res.push({
            cmd: cmd.name.toLowerCase(),
            flagContent: process.argv[i + 1]
              ? process.argv[i + 1].startsWith("-")
                ? true
                : process.argv[i + 1]
                ? process.argv[i + 1]
                : true
              : true,
            flag: arg,
          });
        }
      });
    });
    this["result"] = {};
    this.res.map((res) => {
      this["result"][res.cmd.toLowerCase()] = res;
    });
  }
  get parsed() {
    return this.result;
  }
  /**
   * @method
   * @param {String} mod The module, typically an npm package but can be another file. Call it with the require keyword.
   * @param {Object} options The options for the module
   */
  use(mod,options) {
    if (mod) {
      let returner = mod(this,options);
      try{
      if(returner){
        if(!returner.callName) throw new TypeError("Could not find property 'callName' of the plugin.")
        console.log(returner)
        this[returner.callName.toLowerCase()] = {};
        for(const[key,value] of Object.entries(returner)){
          this[returner.callName.toLowerCase()][key]=value;
        }
      }
    }catch(e){console.error(e)}
    };
  }
  get utils() {
    return utils;
  }
}
module.exports = Typer;