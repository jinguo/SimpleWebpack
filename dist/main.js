(function(modules){
      function require(filename) {
        var fn = modules[filename];
        var module = { exports: {}};
        fn(require, module, module.exports);

        return module.exports;
      }

      require('/Users/zkw/personalwork/SimpleWebpack/src/index.js');
    })({'/Users/zkw/personalwork/SimpleWebpack/src/index.js': function (require, module, exports) { "use strict";

var _hello = require("./hello.js");

document.write((0, _hello.hello)('JinGuo')); },'./hello.js': function (require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hello = hello;
function hello(name) {
  return 'hello' + name;
} },})