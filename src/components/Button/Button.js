import { Link } from 'react-router-dom';
import classnames from 'classnames';

const Button = ({
  type,
  to,
  appearance = 'primary',
  onClick,
  disabled = false,
  children,
  className,
}) => {
  const classesToApply = classnames({
    'p-1 border-b-2 focus:outline-none': true,
    'font-bold border-yellow-500 focus:border-indigo-500':
      appearance === 'primary',
    'border-indigo-500': appearance === 'secondary',
    'border-blue-400 text-xs': appearance === 'header',
    'opacity-50 cursor-default': disabled,
    [className]: className,
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
