import { VFC } from 'react';
import { logout } from 'lib/auth';
import Button from 'components/Button';
import { BUTTON_VARIANTS } from 'components/Button/Button';

const links = [
  { pathname: '/', text: 'Today' },
  { pathname: '/history', text: 'History' },
  { pathname: '/tags', text: 'Tags' },
];

const Header: VFC = () => (
  <div className="flex justify-end mb-4 space-x-2 md:absolute md:top-8 md:right-8">
    {links.map((link) => (
      <Button
        key={link.pathname}
        appearance={BUTTON_VARIANTS.HEADER}
        to={link.pathname}
      >
        {link.text}
      </Button>
    ))}

    <Button appearance={BUTTON_VARIANTS.HEADER} onClick={logout}>
      Log out
    </Button>
  </div>
);

export default Header;
