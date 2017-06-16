"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    extends: ['plugin:nebiru/test'],
    globals: {
        module: true,
        inject: true
    },
    rules: {
        'lodash/prefer-lodash-method': [1, { ignoreObjects: ['result', 'htmlResult', 'element'] }]
    }
};
