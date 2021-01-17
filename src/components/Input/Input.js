import classnames from 'classnames';

const Input = ({
  type = 'text',
  value,
  label,
  onChange,
  placeholder,
  className,
}) => (
  <label
    className={classnames({
      'block my-4': true,
      [className]: className,
    })}
  >
    <div className="mb-2">{label}</div>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full pb-2 border-b-2 border-gray-300 bg-transparent appearance-none rounded-none placeholder-gray-500 outline-none focus:border-blue-400"
      placeholder={placeholder}
    />
  </label>
);

export default Input;
