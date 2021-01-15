import TextareaAutosize from 'react-autosize-textarea';
import classes from './TextArea.module.css';

const TextArea = ({ value, onChange, save, placeholder }) => (
  <TextareaAutosize
    className={classes.textArea}
    value={value}
    onChange={onChange}
    onBlur={() => {
      save(value);
    }}
    placeholder={placeholder}
  ></TextareaAutosize>
);

export default TextArea;
