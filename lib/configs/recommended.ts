export default {
    plugins: [
        "angular",
        "jasmine",
        "protractor",
        "lodash"
    ],

    extends: ["eslint:recommended", "plugin:lodash/canonical"],

    env: {
        browser: true,
        jquery: true
    },

    rules: {
        "strict": [2, "function"],
        "semi": [2, "always"],
        "quotes": [2, "single"],

        "no-bitwise": 1,
        "indent": [2, 4],

        // because _isAopDate
        "no-underscore-dangle": 0,

        // spaces before semi-colons
        "semi-spacing": ["error"],

        // enforce brace styles
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],

        // no optional curly braces
        "curly": "error",

        // no unnecessary usage of .call/.apply
        "no-useless-call": "error",

        // require $inject style angular injections
        "angular/di": [2, "$inject"],

        // fancy angular rules we aren't ready for
        "angular/controller-as": 1,
        "angular/controller-as-route": 1,
        "angular/controller-as-vm": 0,
        "angular/no-service-method": 0,
        "angular/on-watch": 2,

        "lodash/preferred-alias": 1,
        "lodash/prefer-lodash-method": ['warn', { "ignoreObjects": ["element", "angular"] }],
        "lodash/prefer-constant": 1,
        "lodash/prefer-noop": 1,
        "lodash/matches-shorthand": 1,
        "lodash/matches-prop-shorthand": 1,
        "lodash/identity-shorthand": 1,
        "lodash/path-style": 1,
        "lodash/prefer-lodash-typecheck": 1,

        "lodash/chaining": ['warn', 'always'],

        "lodash/chain-style": 1,

        "lodash/prefer-get": 1,
        "lodash/unwrap": 1,
        "lodash/prefer-startswith": 1,
        "lodash/collection-return": 1,
        "lodash/prefer-times": 1,
        "lodash/prop-shorthand": 1,
        "lodash/prefer-reject": 1,
        "lodash/prefer-filter": 1,
        "lodash/prefer-map": 1,
        "lodash/prefer-lodash-chain": 1,
        "lodash/prefer-matches": 1,
        "lodash/prefer-includes": 1,
        "lodash/collection-method-value": 1
    },
    globals: {
        "angular": true,
        "_": true,
        "d3": true,
        "moment": true,
        "jsPDF": true,
        "canvg": true
    }
}
