import TextareaAutosize from 'react-autosize-textarea';
import classes from './TextArea.module.css';

const TextArea = ({ value, onChange, placeholder }) => (
  <TextareaAutosize
    className={classes.textArea}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  ></TextareaAutosize>
);

export default TextArea;