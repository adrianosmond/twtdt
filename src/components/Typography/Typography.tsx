import { FC, HTMLAttributes } from 'react';
import classnames from 'classnames';

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  appearance: 'h1' | 'h2' | 'h3' | 'h4' | 'body';
  tagName?: keyof JSX.IntrinsicElements;
  className?: string;
}

const Typography: FC<TypographyProps> = ({
  tagName = 'div',
  appearance = 'body',
  children,
  className,
  ...props
}) => {
  const Element = tagName as keyof JSX.IntrinsicElements;

  return (
    <Element
      className={classnames({
        'font-bold text-2xl mb-4 sm:text-3xl': appearance === 'h1',
        'font-bold text-xl mb-4 sm:text-2xl': appearance === 'h2',
        'font-bold uppercase text-xs text-gray-600 dark:text-gray-400':
          appearance === 'h3',
        'font-bold text-base': appearance === 'h4',
        ...(className ? { [className]: className } : {}),
      })}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Typography;
