import TextareaAutosize from 'react-autosize-textarea';

const TextArea = ({ value, onChange, save, placeholder }) => (
  <TextareaAutosize
    className="w-full pb-2 border-b border-gray-300 bg-transparent appearance-none rounded-none resize-none placeholder-gray-500 outline-none focus:border-blue-400"
    value={value}
    onChange={onChange}
    onBlur={() => {
      save(value);
    }}
    placeholder={placeholder}
  ></TextareaAutosize>
);

export default TextArea;
