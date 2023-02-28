import { typography } from '~/typography';
import { border } from '~/border';
import { opacity } from '~/opacity';
import { shadows } from '~/shadows';
import { color as colors } from '~/colors';
import { spacing } from '~/spacing';
import { zIndex } from '~/z-index';

export const theme = {
  colors: { ...colors },
  spacing: { ...spacing },
  extend: {
    ...typography,
    ...border,
    ...opacity,
    ...shadows,
    ...zIndex,
  },
};
