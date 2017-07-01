"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    plugins: [
        "compat",
        "import",
        "json",
        "promise",
        "react"
    ],
    extends: ["eslint:recommended"],
    env: {
        'browser': true,
        'es6': true,
        'node': true
    },
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    rules: {
        "comma-dangle": [2, "never"],
        "comma-spacing": [2, {"before": false, "after": true}],
        "comma-style": [2, "last"],
        "dot-location": [2, "property"],
        "eol-last": 2,
        "eqeqeq": 2,
        "indent": [2, 4, {"VariableDeclarator": 1, "SwitchCase": 1}],
        "max-depth": [2, 5],
        "max-len": [2, {"code": 120, "ignoreUrls": true}],
        "new-parens": 2,
        "no-bitwise": 1,
        "no-catch-shadow": 2,
        "no-cond-assign": 2,
        "no-console": 1,
        "no-confusing-arrow": 2,
        "no-extra-semi": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-invalid-this": 0,
        "no-irregular-whitespace": 2,
        "no-label-var": 2,
        "no-multiple-empty-lines": 2,
        "no-multi-spaces": 2,
        "no-redeclare": 2,
        "no-self-assign": 2,
        "no-trailing-spaces": 2,
        "no-undef": 2,
        "no-unused-expressions": 2,
        "no-unused-vars": 2,
        "no-useless-concat": 2,
        "no-use-before-define": 2,
        "no-with": 2,
        "no-whitespace-before-property": 2,
        "one-var": [2, "always"],
        "operator-assignment": [2, "always"],
        "quotes": [2, "single"],
        "radix": 2,
        "semi": [2, "always"],
        "sort-imports": 2,
        "space-before-function-paren": [2, {"anonymous": "always", "named": "never"}],
        "strict": [2, "function"],
        "valid-jsdoc": [2, {"prefer": {"return": "returns"}, "requireReturn": false}],
        "vars-on-top": 2,
        "yoda": 2,

        "react/jsx-uses-vars": [2]
    },
    globals: {

    }
};
