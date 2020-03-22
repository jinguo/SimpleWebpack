// 解析成AST，es6转换es5，分析依赖
const fs = require('fs');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const { transformFromAst } = require('babel-core')

module.exports = {
  getAST: (path) => {
    const source = fs.readFileSync(path, 'utf-8');
    return babylon.parse(source, {
      sourceType: 'module'
    });
  },
  getDependencieds: (ast) => {
    const dependencies = [];
    traverse(ast, {
      ImportDeclaration: ({ node }) => {
        dependencies.push(node.source.value);
      }
    })
    return dependencies;
  },
  trasform: (ast) => {
    const { code } = transformFromAst(ast, null, {
      presets: ['env']
    })
    return code;
  }
}