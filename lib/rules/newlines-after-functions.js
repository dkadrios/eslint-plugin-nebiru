/**
 * @fileoverview Rule to make sure there is an empty line after function declarations
 */
"use strict";
var meta = {};
var create = function (context) {
    var validateTrailingSpace = function (node) {
        var next = context.getTokenAfter(node);
        while (next && next.type === 'Punctuator') {
            next = context.getTokenAfter(next);
        }
        if (next) {
            var finishesOn = node.loc.end.line;
            var nextStartsAt = next.loc.start.line;
            if (nextStartsAt < (finishesOn + 2)) {
                context.report(node, 'There should be a new line after a function');
            }
        }
    };
    return {
        FunctionDeclaration: validateTrailingSpace,
        FunctionExpression: validateTrailingSpace
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = { meta: meta, create: create };
