import { typography } from '~/tokens/typography';
import { border } from '~/tokens/border';
import { opacity } from '~/tokens/opacity';
import { shadows } from '~/tokens/shadows';
import { color as colors } from '~/tokens/colors';
import { spacing } from '~/tokens/spacing';
import { zIndex } from '~/tokens/z-index/index';

const getFontSize = () => {
  return Object.keys(typography).reduce((fontSizes, key) => {
    fontSizes[key] = [
      typography[key].fontSize,
      { lineHeight: typography[key].lineHeight },
    ];

    return fontSizes;
  }, {});
};

export const theme = {
  colors,
  spacing,
  ...typography,
  extend: {
    ...border,
    ...opacity,
    ...shadows,
    ...zIndex,
  },
};
