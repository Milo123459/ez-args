const ez = require('../../index');
/**
 * @param {ez} parser 
 * @param {Object} options 
 */
module.exports = (parser,options) => {
  if(options && options.helpText) console.log(options.helpText);
  parser.command({
    name: "help",
    description: "Get all commands and info on them",
    flags: ["-h", "--h", "-help", "--help"],
    code: (data) => {
      console.log(
        `${parser.commands
          .map(
            (cmd) =>
              `${cmd.name} - ${cmd.flags.map((f) => f).join(", ")} | ${
                cmd.description || "No description"
              }`
          )
          .join("\n")}`
      );
    },
  });
};
