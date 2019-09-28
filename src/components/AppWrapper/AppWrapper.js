import React from 'react';
import Header from 'components/Header';
import Typography from 'components/Typography';
import classes from './AppWrapper.module.css';

const AppWrapper = ({ isAuthenticated, children }) => (
  <div className={classes.wrapper}>
    {isAuthenticated ? <Header /> : null}
    <Typography as="h1" appearance="h1">
      Today was the day that
    </Typography>
    {children}
  </div>
);

export default AppWrapper;
