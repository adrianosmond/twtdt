import classnames from 'classnames';
import {
  CSSProperties,
  FC,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
} from 'react';

interface TextAreaProps {
  value: string;
  placeholder: string;
  className: string;
  onChange: (e: FormEvent<HTMLTextAreaElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  style: CSSProperties;
}

const TextArea: FC<TextAreaProps> = ({
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  className,
  style,
}) => {
  const el = useRef<HTMLTextAreaElement>(null);
  const isFocussed = useRef(false);
  const hasScrolled = useRef(false);

  const handleFocus = () => {
    isFocussed.current = true;
    hasScrolled.current = false;
    onFocus?.();
  };

  const handleBlur = useCallback(() => {
    isFocussed.current = false;
    onBlur?.();
  }, [onBlur]);

  /*
    Ok, so this is confusing but it is to do with iOS and the visual viewport...
    When focussing on the textarea on iOS, we shrink the window down, which in turn
    shrinks the textarea, which can mean that the cursor is now off the bottom of
    the shrunken textarea. Blurring and focussing the textarea again will get iOS to
    sort this out, but since this whole flow is triggered by a focus, we need to
    protect against infinite loops. Fun times!
  */
  useEffect(() => {
    const scrollListener = () => {
      if (isFocussed.current && !hasScrolled.current) {
        requestAnimationFrame(() => {
          el.current?.blur();
          hasScrolled.current = true;
          el.current?.focus();
        });
      }
    };

    window.visualViewport.addEventListener('scroll', scrollListener);

    return () =>
      window.visualViewport.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <textarea
      ref={el}
      className={classnames([
        'w-full p-2 border-b border-gray-300 bg-transparent appearance-none rounded-none resize-none placeholder-gray-500 outline-none focus:border-blue-400 bg-gray-50 dark:bg-gray-900',
        className,
      ])}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
      style={style}
    ></textarea>
  );
};

export default TextArea;
