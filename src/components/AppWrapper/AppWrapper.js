import React from 'react';
import classes from './AppWrapper.module.css';

const AppWrapper = ({ children }) => (
  <div className={classes.wrapper}>{children}</div>
);

export default AppWrapper;
