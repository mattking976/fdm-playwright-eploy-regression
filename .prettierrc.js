module.exports = {
    arrowParens: 'avoid',
    endOfLine: 'lf',
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
    bracketSameLine: false,
    overrides: [
        {
            files: 'src/**/*.ts',
            options: {
                printWidth: 250,
            },
        },
    ],
};
