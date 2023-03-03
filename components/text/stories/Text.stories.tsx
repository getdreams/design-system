import * as React from 'react';
import { Text } from '../index';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const xsText = () => <Text size="xs">Hello, I'm some text</Text>;
export const baseText = () => <Text>Hello, I'm some text</Text>;
export const xlText = () => <Text size="xl">Hello, I'm some text</Text>;
export const fourXlText = () => <Text size="4xl">Hello, I'm some text</Text>;

export const thinText = () => <Text weight="thin">Hello, I'm some text</Text>;
export const boldText = () => <Text weight="bold">Hello, I'm some text</Text>;

export const blue500Text = () => (
  <Text color="blue-500">Hello, I'm some text</Text>
);
