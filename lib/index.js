const react = require('./configs/react'),
    recommended = require('./configs/recommended'),
    test = require('./configs/test'),
    test_functional = require('./configs/test-functional'),
    test_unit = require('./configs/test-unit'),
    test_functional_mock = require('./configs/test-functional-mock'),
    newLinesAfterFunctions = require('./rules/newlines-after-functions');

exports.configs = {
    "react": react,
    "recommended": recommended.default,
    "test": test.default,
    'test-functional': test_functional.default,
    'test-functional-mock': test_functional_mock.default,
    'test-unit': test_unit.default
};

exports.rules = {
    'new-lines-after-functions': newLinesAfterFunctions
};
