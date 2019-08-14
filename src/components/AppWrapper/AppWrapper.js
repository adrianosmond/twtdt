import React from 'react';
import Typography from 'components/Typography';
import Button from 'components/Button';
import classes from './AppWrapper.module.css';

const AppWrapper = ({ isAuthenticated, logout, children }) => (
  <div className={classes.wrapper}>
    <Typography as="h1" appearance="h1">
      This was the day that
    </Typography>
    {children}
    {isAuthenticated ? (
      <Button appearance="logout" onClick={logout}>
        Log out
      </Button>
    ) : null}
  </div>
);

export default AppWrapper;
