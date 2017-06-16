"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    extends: ['plugin:nebiru/test', 'plugin:protractor/recommended'],
    env: {
        node: true,
        protractor: true
    },
    rules: {
        strict: [2, 'global'],
        'protractor/no-browser-sleep': 2,
        'no-extra-parens': 2
    }
};
