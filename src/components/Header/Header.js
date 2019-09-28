import React from 'react';
import { useLocation } from 'react-router-dom';
import { logout } from 'lib/auth';
import Button from 'components/Button';
import classes from './Header.module.css';

const links = [
  { pathname: '/', text: 'Home' },
  { pathname: '/history', text: 'History' },
];

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className={classes.wrapper}>
      {links.map(link =>
        pathname !== link.pathname ? (
          <Button key={link.pathname} appearance="header" to={link.pathname}>
            {link.text}
          </Button>
        ) : null,
      )}

      <Button appearance="header" onClick={logout}>
        Log out
      </Button>
    </div>
  );
};

export default Header;
