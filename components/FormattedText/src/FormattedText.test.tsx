import { render, screen } from '@testing-library/react';
import React from 'react';
import { IntlProvider } from 'react-intl';

import { FormattedText } from './FormattedText';

describe('FormattedText', () => {
  test('renders', () => {
    render(
      <IntlProvider locale="en" messages={{ test: 'Render this' }}>
        <FormattedText id="test" />
      </IntlProvider>
    );
    expect(screen.getByText('Render this'));
  });
});
