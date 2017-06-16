"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    plugins: [
        "angular",
        "jasmine",
        "json",
        "protractor"
    ],
    extends: ["eslint:recommended"],
    env: {
        'browser': true,
        'es6': true,
        'jquery': true,
        'node': true,
        'phantomjs': true
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
        // Angular Rules
        // https://github.com/Gillespie59/eslint-plugin-angular

        // Avoid Possible Errors
        "angular/module-getter": 2,
        "angular/module-setter": 2,
        //"angular/no-private-call": 1,

        // Best Practices
        "angular/component-limit": [1, 7], // - limit the number of angular components per file (y001)
        //++"angular/controller-as-route": 1, // - require the use of controllerAs in routes or states (y031)
        //++"angular/controller-as-vm": 1, // - require and specify a capture variable for this in controllers (y032)
        //++"angular/controller-as": 1, // - disallow assignments to $scope in controllers (y031)
        //"angular/deferred": 1, // - use $q(function(resolve, reject){}) instead of $q.deferred
        "angular/di-unused": 1, // - disallow unused DI parameters
        "angular/directive-restrict": 1, // - disallow any other directive restrict than "A" or "E" (y074)
        "angular/empty-controller": 1, // - disallow empty controllers
        //"angular/no-controller": 1, // - disallow use of controllers (according to the component first pattern)
        "angular/no-inline-template": 1, // - disallow the use of inline templates
        "angular/no-run-logic": 1, // - keep run functions clean and simple (y171)
        //"angular/no-services": 1, // - disallow DI of specified services for other angular components ($http for controllers, filters and directives)
        //"angular/on-watch ": 1, //- require $on and $watch deregistration callbacks to be saved in a variable

        // Deprecated Angular Features
        "angular/no-cookiestore": 1, // - use $cookies instead of $cookieStore
        "angular/no-directive-replace": 1, // - disallow the deprecated directive replace property
        "angular/no-http-callback": 1, // - disallow the $http methods success() and error()

        // Naming
        //"angular/controller-name": 1, // - require and specify a prefix for all controller names (y123, y124)
        //"angular/directive-name": 1, // - require and specify a prefix for all directive names (y073, y126)
        //"angular/file-name": 1, // - require and specify a consistent component name pattern (y120, y121)
        //"angular/filter-name": 1, // - require and specify a prefix for all filter names
        //"angular/module-name": 1, // - require and specify a prefix for all module names (y127)
        //"angular/service-name": 1, // - require and specify a prefix for all service names (y125)

        // Conventions
        //"angular/di-order": 1, // -require DI parameters to be sorted alphabetically
        //"angular/di": [2, "array"], // -require a consistent DI syntax
        //"angular/dumb-inject": 1, // -unittest inject functions should only consist of assignments from injected values to describe block variables
        "angular/function-type": 1, // -require and specify a consistent function style for components ("named" or "anonymous") (y024)
        "angular/module-dependency-order": 1, // -require a consistent order of module dependencies
        //"angular/no-service-method": 1, // -use factory() instead of service() (y040)
        //"angular/one-dependency-per-line": 1, // -require all DI parameters to be located in their own line
        "angular/rest-service": [1, "$resource"], // -disallow different rest service and specify one of "$http", "$resource", "Restangular"
        "angular/watchers-execution": 1, // -require and specify consistent use $scope.digest() or $scope.apply()

        // Angular Wrappers
        "angular/angularelement": 1, // -use angular.element instead of $ or jQuery
        //"angular/definedundefined": 1, // -use angular.isDefined and angular.isUndefined instead of other undefined checks
        "angular/document-service": 1, // -use $document instead of document (y180)
        //"angular/foreach": 1, // -use angular.forEach instead of native Array.prototype.forEach
        "angular/interval-service": 1, // -use $interval instead of setInterval (y181)
        "angular/json-functions": 1, // -use angular.fromJson and "angular.toJson" instead of JSON.parse and JSON.stringify
        "angular/log": 1, // -use the $log service instead of the console methods
        "angular/no-angular-mock": 1, // -require to use angular.mock methods directly
        "angular/no-jquery-angularelement": 1, // -disallow to wrap angular.element objects with jQuery or $
        "angular/timeout-service": 1, // -use $timeout instead of setTimeout (y181)
        "angular/typecheck-array": 1, // -use angular.isArray instead of typeof comparisons
        "angular/typecheck-date": 1, // -use angular.isDate instead of typeof comparisons
        "angular/typecheck-function": 1, // -use angular.isFunction instead of typeof comparisons
        "angular/typecheck-number": 1, // -use angular.isNumber instead of typeof comparisons
        "angular/typecheck-object": 1, // -use angular.isObject instead of typeof comparisons
        "angular/typecheck-string": 1, // -use angular.isString instead of typeof comparisons
        "angular/window-service": 1 // -use $window instead of window (y180)
    },
    globals: {
        "angular": true,
        "_": true,
        "d3": true,
        "moment": true,
        "jsPDF": true,
        "canvg": true
    }
};
