import React, { useEffect, useState } from 'react';
import { saveMemory, loadMemory } from 'lib/database';
import { formatDateString } from 'utils/date';
import { useApp } from 'contexts/AppContext';
import WritingForm from 'components/WritingForm';

const WritingContainer = () => {
  const {
    user,
    date,
    updateDate,
    content,
    updateContent,
    setContent,
  } = useApp();

  const save = () => saveMemory(user, date, content);
  const [today] = useState(formatDateString(new Date()));

  useEffect(() => {
    loadMemory(user, date).then((text) => setContent(text || ''));
  }, [user, date, setContent]);

  return (
    <WritingForm
      date={date}
      updateDate={updateDate}
      content={content}
      updateContent={updateContent}
      saveMemory={save}
      today={today}
    />
  );
};

export default WritingContainer;
