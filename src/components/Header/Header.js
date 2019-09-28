import React from 'react';
import { logout } from 'lib/auth';
import Button from 'components/Button';
import classes from './Header.module.css';

const Header = () => (
  <div className={classes.wrapper}>
    <Button appearance="header" onClick={_ => _}>
      History
    </Button>
    <Button appearance="header" onClick={logout}>
      Log out
    </Button>
  </div>
);

export default Header;
