import { typography } from '~/tokens/typography';
import { border } from '~/tokens/border';
import { opacity } from '~/tokens/opacity';
import { shadows } from '~/tokens/shadows';
import { color as colors } from '~/tokens/colors';
import { spacing } from '~/tokens/spacing';
import { zIndex } from '~/tokens/z-index/index';


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
