"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    extends: ['plugin:nebiru/recommended', 'plugin:jasmine/recommended'],
    env: {
        jasmine: true,
        es6: true
    },
    rules: {
        'angular/di': 0,
        'angular/on-watch': 0
    }
};
