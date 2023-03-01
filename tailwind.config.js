import typography from '@tailwindcss/typography';
import { theme } from '~/utils/theme';

const config = {
  darkMode: 'class',
  theme,
  // This plugin is used for the documentation files
  plugins: [typography],
};

export default config;
