import { FC, ReactNode } from 'react';

interface ToggleMenuProps {
  buttonClasses?: string;
  buttonContent: ReactNode;
  menuContent: ReactNode;
  menuOpen: boolean;
  toggleMenu: () => void;
}

const ToggleMenu: FC<ToggleMenuProps> = ({
  buttonClasses,
  buttonContent,
  menuContent,
  menuOpen,
  toggleMenu,
}) => (
  <div className="relative">
    <button className={buttonClasses} onClick={toggleMenu}>
      {buttonContent}
    </button>
    {menuOpen && (
      <div className="absolute w-72 right-0 top-10 p-2 bg-white dark:bg-gray-700 shadow-md rounded-md">
        {menuContent}
      </div>
    )}
  </div>
);

export default ToggleMenu;
