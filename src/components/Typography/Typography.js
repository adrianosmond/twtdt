import classnames from 'classnames';

const Typography = ({
  as: Element = 'div',
  appearance = 'body',
  children,
  className,
  ...props
}) => (
  <Element
    className={classnames({
      'font-bold text-2xl mb-4 sm:text-3xl': appearance === 'h1',
      'font-bold text-xl mb-4 sm:text-2xl': appearance === 'h2',
      'font-bold uppercase text-xs text-gray-600 dark:text-gray-400':
        appearance === 'h3',
      'font-bold text-base': appearance === 'h4',
      [className]: className,
    })}
    {...props}
  >
    {children}
  </Element>
);

export default Typography;
