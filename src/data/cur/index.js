// Reúne todas las curiosidades escritas en cNN.js
const fs = require("fs");
module.exports = fs.readdirSync(__dirname).filter((f) => /^c\d+\.js$/.test(f)).sort().flatMap((f) => require("./" + f));
