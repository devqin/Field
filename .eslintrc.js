module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["@devqin/eslint-config/react"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
    }
};
