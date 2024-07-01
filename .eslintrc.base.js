module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "env": {
        "es6": true,
        "node": true,
        "jest": true,
        "mocha": true
    },
    "plugins": [
        "@typescript-eslint",
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:prettier/recommended"
    ],
    "ignorePatterns": [
        ".eslintrc.js",
        "node_modules"
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "args": "none",
                "ignoreRestSiblings": true,
                "vars": "all",
                "argsIgnorePattern": "^_",
                "destructuredArrayIgnorePattern": "^_",
                "caughtErrors": "all"
            }
        ],
        "no-case-declarations": "off",
        "import/order": "error",
        "import/no-extraneous-dependencies": "error",
        "spaced-comment": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "lines-between-class-members": [
            "error",
            "always",
            {
                "exceptAfterSingleLine": true
            }
        ],
        "no-unreachable": "error"
    },
    "overrides": [
        {
            "files": [
                "test/**/*.{js,ts,tsx}",
                "*.spec.*"
            ],
            "rules": {
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-non-null-assertion": "off",
                "no-unused-expressions": "off"
            }
        }
    ]
}
