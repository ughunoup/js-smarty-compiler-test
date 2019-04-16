const Smarty = require('./node_modules/smarty4js');
const baseDir = __dirname;
const template = __dirname + '/test.tpl';
let s = new Smarty({
    'left_delimiter': '{',
    'right_delimiter': '}',
});
s.setBasedir(baseDir);

let compiler = s.compile(template);

let js = compiler.getJsTpl();

const data = {
    'variableTest': 'test value',
    'array': ['one', 'two', 'tree']
};

var html = compiler.render(data);
console.log(html);