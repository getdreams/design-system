import * as React from 'react';
import { Text } from '../index';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const xsText = () => (
  <Text className="text-xs">Hello, I'm some text</Text>
);

export const baseText = () => <Text>Hello, I'm some text</Text>;

export const xlText = () => (
  <Text className="text-xl">Hello, I'm some text</Text>
);

export const fourXlText = () => (
  <Text className="text-4xl">Hello, I'm some text</Text>
);

export const thinText = () => (
  <Text className="font-thin">Hello, I'm some text</Text>
);

export const boldText = () => (
  <Text className="font-bold">Hello, I'm some text</Text>
);

export const blue500Text = () => (
  <Text className="text-blue-500">Hello, I'm some text</Text>
);
