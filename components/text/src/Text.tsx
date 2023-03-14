import * as React from 'react';
import classNames from 'classnames';

export type TextProps = {
  /**
 Type of html tag to be used 
  */
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
  /**
  ClassName that will be applied to the html tag
  */
  className?: string;
  /**
 Child components that will be passed to the html tag 
  */
  children?: React.ReactNode;
};

/**
A simple Text component
*/
export function Text({ as = 'p', className, children }: TextProps) {
  const Tag = as;
  const classes = classNames(
    `text-base`,
    `font-normal`,
    `text-black`,
    `dark:text-white`,
    className
  );

  return <Tag className={classes}>{children}</Tag>;
}
