export default {
    extends: ['plugin:one-ui/test'],

    globals: {
        module: true,
        inject: true
    },

    rules: {
        'lodash/prefer-lodash-method': [1, { ignoreObjects: ['result', 'htmlResult', 'element'] }]
    }
};
