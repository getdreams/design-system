import * as React from 'react';
import { FormattedText } from '../';

import { IntlProvider } from 'react-intl';

export default {
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <IntlProvider locale="en" messages={{ test: 'I am translated text' }}>
        <Story />
      </IntlProvider>
    ),
  ],
};

export const translatedText = () => <FormattedText id="test" />;
