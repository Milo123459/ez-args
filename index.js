class Command {
  constructor(options){
      let o = options;
      this.name=o.name;
      this.flags=o.flags;
      this.description=o.description;
  }
};
class Typer {
  constructor(){
      this.commands = [];
      this.result = {};
      this.res = [];
  }
  /**
   * 
   * @param {Object} options Options of the command
   * @param {String} options.name The name of the command
   * @param {Array} options.flags The flags of the command
   * @param {String} options.description The description of the command
   */
  command(options){
      this.commands.push(new Command(options));
  }
  /**
   * @method
   * @description Start the system.
   */
  start(){
      process.argv.map((arg,i) => {
          this.commands.map((cmd,y) => {
              if(cmd.flags.includes(arg)){
                  this.res.push({
                      cmd: cmd.name.toLowerCase(),
                      flagContent: process.argv[i+1] ? process.argv[i+1].startsWith("-") ? true : process.argv[i+1] ? process.argv[i+1] : true : true,
                      flag: arg
                  })
              }
          })
      })
      this["result"] = {};
      this.res.map(res => {
          this["result"][res.cmd.toLowerCase()] = res;
      })
  }
  get parsed(){
      return this.result;
  }
};
module.exports = Typer;