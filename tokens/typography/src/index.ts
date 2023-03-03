import { fontSize, fontWeight } from './tokens.json';

const compoundFontSizes = () => {
  return Object.keys(fontSize).reduce((compoundFontSizes, key) => {
    compoundFontSizes[key] = [
      fontSize[key].fontSize,
      { lineHeight: fontSize[key].lineHeight },
    ];

    return compoundFontSizes;
  }, {});
};

const typography = {
  fontFamily: {
    code: ['Menlo', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'monospace'],
  },
  fontSize: compoundFontSizes(),
  fontWeight,
};

export { typography };
