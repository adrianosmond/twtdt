import { FC } from 'react';
import L from 'components/Link';

interface ILink {
  to: string;
  key: string;
  text: string;
}

interface LinkListProps {
  links: ILink[];
}

const Link: FC<LinkListProps> = ({ links }) => (
  <ul className="space-y-2" style={{ columns: 'auto 12rem' }}>
    {links.map((link) => (
      <li key={link.key}>
        <L to={link.to} className="text-sm border-b-4 border-blue-200">
          {link.text}
        </L>
      </li>
    ))}
  </ul>
);

export default Link;
