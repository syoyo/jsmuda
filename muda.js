var jsp = require("uglify-js").parser;

var code = "function muda() { return 1+3; }; var dora";

var ast = jsp.parse(code)

console.log(JSON.stringify(ast))

