import { Link } from 'react-router-dom';
import classnames from 'classnames';
import classes from './Button.module.css';

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
    [classes.button]: true,
    [classes[appearance]]: true,
    [className]: true,
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
