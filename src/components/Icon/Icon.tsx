import { FC } from 'react';
import { TAG_TYPES } from 'contexts/TagContext';

enum ICONS {
  CHEVRON_LEFT = 'CHEVRON_LEFT',
  CHEVRON_RIGHT = 'CHEVRON_RIGHT',
}

export const Icons = { ...TAG_TYPES, ...ICONS };

interface IconProps {
  type: keyof typeof Icons;
  className?: string;
}

const Icon: FC<IconProps> = ({ type, className = 'w-6 h-6 fill-current' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    {type === Icons.PERSON && (
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    )}
    {type === Icons.PLACE && (
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    )}
    {type === Icons.FILM && (
      <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
    )}
    {type === Icons.GENERIC && (
      <path d="M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4zm-6 4h-4v-4h4v4z" />
    )}
    {type === Icons.CHEVRON_LEFT && <path d="m15 7-1-1-6 6 6 6 1-1-4-5z" />}
    {type === Icons.CHEVRON_RIGHT && <path d="M10 6 9 7l4 5-4 5 1 1 6-6z" />}
  </svg>
);

export default Icon;
