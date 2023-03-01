import { render, screen } from '@testing-library/react';
import React from 'react';

import { Text } from './Text';

describe('Text', () => {
  test('renders', () => {
    render(<Text>Render this</Text>);
    expect(screen.getByText('Render this'));
  });
});
