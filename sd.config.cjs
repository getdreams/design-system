module.exports = {
  source: ['utils/raw-tokens/sd-input.json'],
  fileHeader: {
    autoGeneratedFileHeader: () => {
      return [`Do not edit directly, this file was auto-generated`];
    },
  },
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: './tokens/',
      files: [
        {
          destination: 'spacing/src/tokens.json',
          format: 'json/nested',
          filter: {
            type: 'spacing',
          },
          options: {
            fileHeader: 'autoGeneratedFileHeader',
          },
        },
        {
          destination: 'colors/src/tokens.json',
          format: 'json/nested',
          filter: function (token) {
            return token.path[0] === 'color';
          },
          options: {
            fileHeader: 'autoGeneratedFileHeader',
          },
        },
        {
          destination: 'typography/src/tokens.json',
          format: 'json/nested',
          filter: function (token) {
            return (
              (token.path[0] === 'text') | (token.path[0] === 'fontWeight')
            );
          },
          options: {
            fileHeader: 'autoGeneratedFileHeader',
          },
        },
      ],
    },
  },
};
