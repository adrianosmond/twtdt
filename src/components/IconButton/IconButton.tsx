import { ButtonHTMLAttributes, VFC } from 'react';
import classNames from 'classnames';
import Icon, { Icons } from 'components/Icon';

type IconButtonProps = {
  icon: keyof typeof Icons;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: VFC<IconButtonProps> = ({
  icon,
  className,
  disabled,
  ...props
}) => (
  <button
    className={classNames(
      'w-6 h-6 flex items-center justify-center rounded-full focus:outline-none text-white bg-gray-500',
      { 'bg-gray-300 dark:bg-gray-700 dark:text-gray-500': disabled },
      className,
    )}
    {...props}
  >
    <Icon type={icon} className="fill-current w-4 h-4" />
  </button>
);

export default IconButton;
