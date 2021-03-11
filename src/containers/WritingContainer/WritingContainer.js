import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { saveMemory, loadMemory } from 'lib/database';
import { formatDateString } from 'utils/date';
import { useApp } from 'contexts/AppContext';
import WritingForm from 'components/WritingForm';

const WritingContainer = () => {
  const { user, content, updateContent, setContent } = useApp();

  const { date } = useParams();
  const history = useHistory();
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const typingTimeout = useRef(null);

  const updateDate = useCallback(
    (e) => {
      const { value } = e.target;
      const newDate = new Date(value);
      const today = new Date();
      if (value === '' || newDate > today) {
        e.preventDefault();
      } else {
        history.push(`/${value}`);
      }
    },
    [history],
  );

  const save = useCallback(
    (text) => {
      setIsSaving(true);
      saveMemory(user, date, text).finally(() => setIsSaving(false));
    },
    [user, date],
  );

  useEffect(() => {
    clearTimeout(typingTimeout.current);
    typingTimeout.current = setTimeout(() => save(content), 5000);
  }, [content, save]);

  const [today] = useState(formatDateString(new Date()));

  useEffect(() => {
    // Don't save the current content onto a new date
    clearTimeout(typingTimeout.current);
    setIsLoading(true);
    loadMemory(user, date).then((text) => {
      setContent(text || '');
      setIsLoading(false);
      setTimeout(() => {
        // Don't re-save any existing content loaded from the new date
        clearTimeout(typingTimeout.current);
      }, 0);
    });
  }, [user, date, setContent]);

  return (
    <WritingForm
      date={date}
      updateDate={updateDate}
      content={content}
      updateContent={updateContent}
      save={save}
      isLoading={isLoading}
      isSaving={isSaving}
      today={today}
    />
  );
};

export default WritingContainer;
