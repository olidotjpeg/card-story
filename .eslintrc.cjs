module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        "plugin:svelte/recommended"
    ],
    parserOptions: {
        ecmaVersion: 'ESNext',
        sourceType: 'ESNext',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.svelte']
    },
    env: {
        es6: true,
        browser: true
    },
    overrides: [
        {
            files: ["*.svelte"],
            parser: "svelte-eslint-parser",
            parserOptions: {
            parser: "@typescript-eslint/parser",
            },
        },
    ],
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['node_modules'],
    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn", // or "error"
            { 
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
                "caughtErrorsIgnorePattern": "^_"
            }
        ],
        "@typescript-eslint/ban-ts-comment": 1
    }
}