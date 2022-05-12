module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 160,
  overrides: [
    {
      /** Sass-specific configuration. */
      files: '*.scss',
      options: {
        singleQuote: true,
        printWidth: 160,
      },
    },
  ],
};
