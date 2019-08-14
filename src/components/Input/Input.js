import React from 'react';
import classnames from 'classnames';
import classes from './Input.module.css';

const Input = ({
  type = 'text',
  value,
  label,
  onChange,
  placeholder,
  className,
}) => (
  <label
    className={classnames({
      [classes.wrapper]: true,
      [className]: true,
    })}
  >
    <div className={classes.label}>{label}</div>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={classes.input}
      placeholder={placeholder}
    />
  </label>
);

export default Input;
