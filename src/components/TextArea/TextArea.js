import classnames from 'classnames';

const TextArea = ({ value, onChange, save, placeholder, className, style }) => (
  <textarea
    className={classnames([
      'w-full p-2 border-b border-gray-300 bg-transparent appearance-none rounded-none resize-none placeholder-gray-500 outline-none focus:border-blue-400 bg-gray-50 dark:bg-gray-900',
      className,
    ])}
    value={value}
    onChange={onChange}
    onBlur={save}
    placeholder={placeholder}
    style={style}
  ></textarea>
);

export default TextArea;
