import TextArea from 'components/TextArea';
import Datepicker from 'components/Datepicker';
import Button from 'components/Button';
import classes from './WritingForm.module.css';

const WritingForm = ({
  date,
  updateDate,
  content,
  updateContent,
  saveMemory,
  today,
}) => (
  <div>
    <div className={classes.sentence}>
      <Datepicker value={date} onChange={updateDate} max={today} />
    </div>
    <TextArea
      value={content}
      onChange={updateContent}
      placeholder="What you did goes here..."
    />
    <div className={classes.actions}>
      <Button onClick={saveMemory}>Save</Button>
    </div>
  </div>
);

export default WritingForm;
