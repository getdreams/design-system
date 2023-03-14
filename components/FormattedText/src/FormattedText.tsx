import React from 'react';

import { Text, TextProps } from '../../text';
import { FormattedMessage } from 'react-intl';

interface FormattedTextProps extends TextProps {
  /**
 The ID used to pull the translated text value from our localisation tool - Lokalise 
  */
  id: string;
  /**
 Values that will be injected into matching arguments in the message 
  */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values?: Record<string, any>;
}

/**
A FormattedText component which takes a Lokalise key and returns the translated text for that key and the current language
*/
export function FormattedText({ id, values, ...rest }: FormattedTextProps) {
  return (
    <Text {...rest}>
      <FormattedMessage id={id} values={values} />
    </Text>
  );
}
