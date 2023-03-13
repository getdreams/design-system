import { text, fontWeight } from './tokens.json';

const textTokens = () => {
  return Object.keys(text).reduce((textTokens, key) => {
    const textToken = text[key];

    textTokens[key] = [
      textToken.fontSize,
      { lineHeight: textToken.lineHeight },
    ];

    return textTokens;
  }, {});
};

const typography = {
  fontFamily: {
    code: ['Menlo', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'monospace'],
  },
  fontSize: textTokens(),
  fontWeight,
};

export { typography };
