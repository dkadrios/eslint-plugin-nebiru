import rule from '../../../lib/rules/newlines-after-functions';
import eslint = require('eslint');

var RuleTester = eslint.RuleTester;
var ruleTester = new RuleTester();
ruleTester.run('newlines-after-functions', rule, {
    valid: [
        `function abc() {
  return 123;
}`,
        `function abc() {
return 123;
}

var something;`,
        `var abc = function() {
return 123;
};

var somethingElse;`,
        `var abc = function() {
return 123;
},

xyz = function() {
return 987;
};`
    ],
    invalid: [
        {
            code: `function abc() {
  return 123;
}
var x;`,
            errors: 1
        },
        {
            code: `var abc = function() {
return 123;
},
xyz = function() {
return 987;
};`,
            errors: 1
        }

    ]
});
