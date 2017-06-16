export default {
    extends: ['plugin:one-ui/test', 'plugin:protractor/recommended'],

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
