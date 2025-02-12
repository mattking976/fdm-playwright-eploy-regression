module.exports = {
    arrowParens: 'avoid',
    endOfLine: 'crlf',
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
    bracketSameLine: false,
    overrides: [
        {
            files: 'tests/**/*.ts',
            options: {
                printWidth: 250,
            },
            files: 'POM/**/*.ts',
            options: {
                printWidth: 250,
            }
        },
    ],
};
