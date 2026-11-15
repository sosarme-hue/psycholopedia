const fs = require("fs");
module.exports = fs.readdirSync(__dirname).filter((f) => /^v\d+\.js$/.test(f)).sort().flatMap((f) => require("./" + f));
