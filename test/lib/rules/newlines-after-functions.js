"use strict";
var newlines_after_functions_1 = require('../../../lib/rules/newlines-after-functions');
var eslint = require('eslint');
var RuleTester = eslint.RuleTester;
var ruleTester = new RuleTester();
ruleTester.run('newlines-after-functions', newlines_after_functions_1.default, {
    valid: [
        "function abc() {\n  return 123;\n}",
        "function abc() {\nreturn 123;\n}\n\nvar something;",
        "var abc = function() {\nreturn 123;\n};\n\nvar somethingElse;",
        "var abc = function() {\nreturn 123;\n},\n\nxyz = function() {\nreturn 987;\n};"
    ],
    invalid: [
        {
            code: "function abc() {\n  return 123;\n}\nvar x;",
            errors: 1
        },
        {
            code: "var abc = function() {\nreturn 123;\n},\nxyz = function() {\nreturn 987;\n};",
            errors: 1
        }
    ]
});
