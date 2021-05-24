import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { saveMemory, loadMemory } from 'lib/database';
import usePageVisibilityChange from 'hooks/usePageVisibilityChange';
import useTodaysDate from 'hooks/useTodaysDate';
import { useUser } from 'contexts/UserContext';
import { useMemory } from 'contexts/MemoryContext';
import WritingForm from 'components/WritingForm';

interface RouteParams {
  date: string;
}

const WritingContainer: FC = () => {
  const user = useUser() as string;
  const { memory, updateMemory, setMemory } = useMemory();
  const toSave = useRef(memory);
  const { date } = useParams<RouteParams>();
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