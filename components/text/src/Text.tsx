import * as React from 'react';
import classNames from 'classnames';

export type TextProps = {
  /**
 Type of html tag to be used 
  */
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
  /**
  Size of the text
  */
  size?:
    | 'tiny'
    | 'small'
    | 'standard'
    | 'medium'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6';
  /**
  Weight of the text
  */
  weight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
  /**
  Color of the text
  */
  color?: string;
  /**
  Color of the text when using a dark theme
  */
  darkColor?: string;
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
export function Text({
  as = 'p',
  size = 'standard',
  weight = 'normal',
  color = 'black',
  darkColor = 'white',
  className,
  children,
}: TextProps) {
  const Tag = as;
  const classes = classNames(
    `text-${size}`,
    `font-${weight}`,
    `text-${color}`,
    `dark:text-${darkColor}`,
    className
  );

  return <Tag className={classes}>{children}</Tag>;
}
