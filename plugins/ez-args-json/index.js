const path = require("./path");
const fs = require("fs");
const ez = require("../../index");
/**
 * @param {ez} parser
 * @param {Object} options
 */
module.exports = (parser, options) => {
  if (!options) throw new TypeError("No options specified!");
  if (!options.name) throw new TypeError("No options.name specified!");
  return {
    callName: "json",
    set(key, value) {
      let js;
      if (fs.existsSync(path.replace(/{n}/gi, options.name))) {
        js = JSON.parse(
          JSON.stringify(require(path.replace(/{n}/gi, options.name)))
        );
      } else js = {};
      js[key] = value;
      fs.writeFileSync(
        path.replace(/{n}/gi, options.name),
        JSON.stringify(js, null, 2)
      );
    },
    get(key) {
      let js;
      if (fs.existsSync(path.replace(/{n}/gi, options.name))) {
        js = JSON.parse(
          JSON.stringify(require(path.replace(/{n}/gi, options.name)))
        );
      }
      if (!js) return undefined;
      if (!js[key]) return undefined;
      else return js[key];
    },
    has(key) {
      return !!this.get(key);
    },
    delete(key) {
      let js;
      if (fs.existsSync(path.replace(/{n}/gi, options.name))) {
        js = JSON.parse(
          JSON.stringify(require(path.replace(/{n}/gi, options.name)))
        );
      } else return undefined;
      js[key] = undefined;
      fs.writeFileSync(
        path.replace(/{n}/gi, options.name),
        JSON.stringify(js, null, 2)
      );
    },
  };
};
