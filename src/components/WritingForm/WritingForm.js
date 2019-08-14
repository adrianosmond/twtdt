import React from 'react';
import TextArea from 'components/TextArea';
import Select from 'components/Select';
import Button from 'components/Button';
import classes from './WritingForm.module.css';

const WritingForm = ({
  type,
  updateType,
  content,
  updateContent,
  memoryOptions,
  saveMemory,
}) => (
  <div>
    <div className={classes.sentence}>
      I <Select options={memoryOptions} value={type} onChange={updateType} />{' '}
      because...
    </div>
    <TextArea
      value={content}
      onChange={updateContent}
      placeholder="your reason goes here..."
    />
    <div className={classes.actions}>
      <Button onClick={saveMemory}>Save</Button>
    </div>
  </div>
);

export default WritingForm;
