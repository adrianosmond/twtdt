import { FC } from 'react';
import { Link as L } from 'react-router-dom';

interface LinkProps {
  to: string;
  className: string;
}

const Link: FC<LinkProps> = ({ to, children, className }) => (
  <L to={to} className={className}>
    {children}
  </L>
);

export default Link;
