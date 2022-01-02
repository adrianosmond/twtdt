import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { saveMemory, loadMemory } from 'lib/database';
import usePageVisibilityChange from 'hooks/usePageVisibilityChange';
import useTodaysDate from 'hooks/useTodaysDate';
import { useUser } from 'contexts/UserContext';
import { useMemory } from 'contexts/MemoryContext';
import WritingForm from 'components/WritingForm';

const WritingContainer: FC = () => {
  const user = useUser() as string;
  const { memory, updateMemory, setMemory } = useMemory();
  const toSave = useRef(memory);
  const today = useTodaysDate();
  const { date = today } = useParams();
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateDate = useCallback(
    (e) => {
      const { value } = e.target;
      const newDate = new Date(value);
      if (value === '' || newDate > new Date()) {
        e.preventDefault();
      } else {
        navigate(`/${value}`);
      }
    },
    [navigate],
  );

  const save = useCallback(() => {
    setIsSaving(true);
    saveMemory(user, date, toSave.current).finally(() => setIsSaving(false));
  }, [user, date]);

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

  useEffect(() => {
    toSave.current = memory;
  }, [memory]);

  usePageVisibilityChange({ onShow: load, onHide: save });

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
