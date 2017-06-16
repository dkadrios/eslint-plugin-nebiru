"use strict";
var recommended_1 = require('./configs/recommended');
var test_1 = require('./configs/test');
var test_functional_1 = require('./configs/test-functional');
var test_unit_1 = require('./configs/test-unit');
var test_functional_mock_1 = require('./configs/test-functional-mock');
var newLinesAfterFunctions = require('./rules/newlines-after-functions');
exports.configs = {
    "recommended": recommended_1.default,
    "test": test_1.default,
    'test-functional': test_functional_1.default,
    'test-functional-mock': test_functional_mock_1.default,
    'test-unit': test_unit_1.default
};
exports.rules = {
    'new-lines-after-functions': newLinesAfterFunctions
};
