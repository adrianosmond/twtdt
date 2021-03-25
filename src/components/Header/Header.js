import { logout } from 'lib/auth';
import Button from 'components/Button';

const links = [
  { pathname: '/', text: 'Today' },
  { pathname: '/history', text: 'History' },
];

const Header = () => (
  <div className="flex justify-end mb-4 space-x-2 md:absolute md:top-8 md:right-8">
    {links.map((link) => (
      <Button key={link.pathname} appearance="header" to={link.pathname}>
        {link.text}
      </Button>
    ))}

    <Button appearance="header" onClick={logout}>
      Log out
    </Button>
  </div>
);

export default Header;
