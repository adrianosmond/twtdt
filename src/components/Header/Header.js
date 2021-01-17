import { useLocation } from 'react-router-dom';
import { logout } from 'lib/auth';
import Button from 'components/Button';

const links = [
  { pathname: '/', text: 'Home' },
  { pathname: '/history', text: 'History' },
];

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex justify-end mb-4 space-x-2 md:absolute md:top-8 md:right-8">
      {links.map((link) =>
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
