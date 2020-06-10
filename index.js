/*
ez-args - index.js
Soon to come: Plugins
*/
class Command {
  constructor(options) {
    let o = options;
    this.name = o.name;
    this.flags = o.flags;
    this.description = o.description;
    this.code = o.cb;
    this.required = o.required;
  }
}
class Typer {
  constructor() {
    this.commands = [];
    this.result = {};
    this.res = [];
  }
  /**
   * @method
   * @param {Object} options Options of the command
   * @param {String} options.name The name of the command
   * @param {Array} options.flags The flags of the command
   * @param {String} [options.description] The description of the command
   * @param {Function} [options.cb] The callback to execute if the flag is provided, passes value through the callback
   * @param {Boolean} [options.required] If the flag is required
  */
  command(options) {
    this.commands.push(new Command(options));
  }
  /**
   * @method
   * @description Start the system.
   * @example
   * <Typer>.start();
   */
  start() {
    this.command({
      name: "help",
      description: "Get all commands and usage",
      flags: ["-h", "--h", "-help", "--help"],
    });
    this.command({
      name: "version",
      description: "Grab the version",
      flags: ["-v", "--v", "-version", "--version"],
    });
    process.argv.map((arg, i) => {
      this.commands.map((cmd, y) => {
        if (cmd.flags.includes(arg)) {
          if(cmd.code){
              cmd.code(process.argv[i + 1]
              ? process.argv[i + 1].startsWith("-")
                ? true
                : process.argv[i + 1]
                ? process.argv[i + 1]
                : true
              : true);
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
        } else if(cmd.required){
          console.log(`The flag '${cmd.name}' is required, but was never called.`);
          console.log(
            `${this.commands
              .map(
                (cmd) =>
                  `${cmd.name}, ${cmd.flags.map((flag) => flag).join(", ")}, ${
                    cmd.description || "No description"
                  }`
              )
              .join("\n")}`
          );
          process.exit(process.pid);
        }
      });
    });
    this["result"] = {};
    this.res.map((res) => (this["result"][res.cmd.toLowerCase()] = res));
    if (!this.res.length) {
      console.log(
        `${this.commands
          .map(
            (cmd) =>
              `${cmd.name}, ${cmd.flags.map((flag) => flag).join(", ")}, ${
                cmd.description || "No description"
              }`
          )
          .join("\n")}`
      );
    }
    if (this.parsed.help) {
      console.log(
        `${this.commands
          .map(
            (cmd) =>
              `${cmd.name}, ${cmd.flags.map((flag) => flag).join(", ")}, ${
                cmd.description || "No description"
              }`
          )
          .join("\n")}`
      );
    } else if (this.parsed.version) {
      console.log(require("./package.json").version);
    }
  }
  get parsed() {
    return this.result;
  };
  /**
   * @method
   * @param {Function} plugin The plugin to import, typically a module
   * @description Use a third party module to import commands
   */
  use(plugin){
    plugin(this);
  }
};
module.exports = Typer;
