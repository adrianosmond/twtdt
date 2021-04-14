import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { saveMemory, loadMemory } from 'lib/database';
import usePageVisibilityChange from 'hooks/usePageVisibilityChange';
import useTodaysDate from 'hooks/useTodaysDate';
import { useUser } from 'contexts/UserContext';
import { useMemory } from 'contexts/MemoryContext';
import WritingForm from 'components/WritingForm';

const WritingContainer = () => {
  const user = useUser();
  const { memory, updateMemory, setMemory } = useMemory();
  const { date } = useParams();
  const history = useHistory();
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const today = useTodaysDate();

  const updateDate = useCallback(
    (e) => {
      const { value } = e.target;
      const newDate = new Date(value);
      if (value === '' || newDate > new Date()) {
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

  const load = useCallback(() => {
    setIsLoading(true);
    loadMemory(user, date).then((text) => {
      setMemory(text || '');
      setIsLoading(false);
    });
  }, [date, setMemory, user]);

  useEffect(() => {
    load();
  }, [load]);

  usePageVisibilityChange({ onShow: load });

  return (
    <WritingForm
      date={date}
      updateDate={updateDate}
      content={memory}
      updateContent={updateMemory}
      save={save}
      isLoading={isLoading}
      isSaving={isSaving}
      today={today}
    />
  );
};

export default WritingContainer;
