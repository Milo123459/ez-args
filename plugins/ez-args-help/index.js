module.exports = (parser) => {
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
  parser.start();
};
