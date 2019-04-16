const Smarty = require('./node_modules/smarty4js');
const baseDir = __dirname;
const template = __dirname + 'test.tpl';
let s = new Smarty();
s.setBasedir(baseDir);

let compiler = s.compile(template);

let js = compiler.getJsTpl();
const data -
let html = compiler.render(data);
console.log(js);