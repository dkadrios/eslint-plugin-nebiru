export default {
    extends: ['plugin:one-ui/recommended', 'plugin:jasmine/recommended'],

    env: {
        jasmine: true,
        es6: true
    },

    rules: {
        'angular/di': 0,
        'angular/on-watch': 0
    }
};
