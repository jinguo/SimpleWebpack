const path = require('path');
const { getAST, getDependencieds, trasform } = require('./parser');

const ast = getAST(path.join(__dirname, '../src/index.js'))

console.log(trasform(ast))