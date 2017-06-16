import recommended from './configs/recommended';
import test from './configs/test';
import testFunctional from './configs/test-functional';
import testUnit from './configs/test-unit';
import testFunctionalMock from './configs/test-functional-mock';

import * as newLinesAfterFunctions from './rules/newlines-after-functions';

export let configs = {
    "recommended": recommended,
    "test": test,
    'test-functional': testFunctional,
    'test-functional-mock': testFunctionalMock,
    'test-unit': testUnit
};

export let rules = {
    'new-lines-after-functions': newLinesAfterFunctions
};
