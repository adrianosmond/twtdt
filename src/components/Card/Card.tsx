import { FC } from 'react';

const Card: FC = ({ children }) => (
  <div className="flex flex-col p-6 bg-gray-100 dark:bg-gray-700 rounded-md">
    {children}
  </div>
);

export default Card;
