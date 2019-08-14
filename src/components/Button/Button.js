import React from 'react';
import classnames from 'classnames';
import classes from './Button.module.css';

const Button = ({
  type,
  appearance = 'primary',
  onClick,
  disabled = false,
  children,
  className,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={classnames({
      [classes.button]: true,
      [classes[appearance]]: true,
      [className]: true,
    })}
  >
    {children}
  </button>
);

export default Button;
