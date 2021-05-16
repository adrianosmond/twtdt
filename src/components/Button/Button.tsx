import { ComponentProps, FC } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

export enum BUTTON_VARIANTS {
  PRIMARY,
  SECONDARY,
  HEADER,
}

const Button: FC<
  ComponentProps<'button'> & {
    to?: string;
    appearance?: BUTTON_VARIANTS;
  }
> = ({
  type,
  to,
  appearance = BUTTON_VARIANTS.PRIMARY,
  onClick,
  disabled = false,
  children,
  className,
}) => {
  const classesToApply = classnames({
    'p-1 border-b-2 focus:outline-none': true,
    'font-bold border-yellow-500 focus:border-indigo-500':
      appearance === BUTTON_VARIANTS.PRIMARY,
    'border-indigo-500': appearance === BUTTON_VARIANTS.SECONDARY,
    'border-blue-400 text-xs': appearance === BUTTON_VARIANTS.HEADER,
    'opacity-50 cursor-default': disabled,
    ...(className ? { [className]: className } : {}),
  });

  if (to) {
    return (
      <Link to={to} className={classesToApply}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classesToApply}
    >
      {children}
    </button>
  );
};

export default Button;
