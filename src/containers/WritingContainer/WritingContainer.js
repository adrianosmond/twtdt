import React, { useCallback, useEffect, useRef, useState } from 'react';
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

  const [isSaving, setIsSaving] = useState(false);
  const typingTimeout = useRef(null);

  const save = useCallback(
    (text) => {
      setIsSaving(true);
      saveMemory(user, date, text).finally(() => setIsSaving(false));
    },
    [user, date],
  );

  useEffect(() => {
    if (content.length > 0 && content.length % 10 === 0) {
      save(content);
    }

    clearTimeout(typingTimeout.current);
    typingTimeout.current = setTimeout(() => save(content), 3000);
  }, [content, save]);

  const [today] = useState(formatDateString(new Date()));

  useEffect(() => {
    clearTimeout(typingTimeout.current);
    loadMemory(user, date).then((text) => {
      setContent(text || '');
    });
  }, [user, date, setContent]);

  return (
    <WritingForm
      date={date}
      updateDate={updateDate}
      content={content}
      updateContent={updateContent}
      isSaving={isSaving}
      today={today}
    />
  );
};

export default WritingContainer;
