import React from 'react';
import classes from './Select.module.css';

const Select = ({ value, onChange, options }) => (
  <div className={classes.wrapper}>
    <div>{options.find(o => o.value === value).name}</div>
    <select value={value} onChange={onChange} className={classes.select}>
      {options.map(option => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
