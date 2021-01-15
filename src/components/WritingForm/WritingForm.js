import TextArea from 'components/TextArea';
import Datepicker from 'components/Datepicker';
import classes from './WritingForm.module.css';

const WritingForm = ({
  date,
  updateDate,
  content,
  updateContent,
  save,
  isSaving,
  today,
}) => (
  <div>
    <div className={classes.sentence}>
      <Datepicker value={date} onChange={updateDate} max={today} />
    </div>
    <TextArea
      value={content}
      onChange={updateContent}
      save={save}
      placeholder="What you did goes here..."
    />
    {isSaving && <p>Saving...</p>}
  </div>
);

export default WritingForm;
