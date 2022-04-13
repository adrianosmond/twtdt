import {
  VFC,
  useCallback,
  useEffect,
  useRef,
  useState,
  FormEvent,
} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { sub, add } from 'date-fns';
import { saveMemory, loadMemory } from 'lib/database';
import usePageVisibilityChange from 'hooks/usePageVisibilityChange';
import useTodaysDate from 'hooks/useTodaysDate';
import { useUser } from 'contexts/UserContext';
import { useMemory } from 'contexts/MemoryContext';
import WritingForm from 'components/WritingForm';
import { formatDateString } from 'utils/date';

const WritingContainer: VFC = () => {
  const user = useUser() as string;
  const { memory, updateMemory, setMemory } = useMemory();
  const toSave = useRef(memory);
  const today = useTodaysDate();
  const { date = today } = useParams();
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdateTime, setLastUpdateTime] = useState(0);

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

  const goToYesterday = useCallback(() => {
    const yesterday = formatDateString(sub(new Date(date), { days: 1 }));
    navigate(`/${yesterday}`);
  }, [date, navigate]);

  const goToTomorrow = useCallback(() => {
    if (date === today) return;
    const tomorrow = formatDateString(add(new Date(date), { days: 1 }));
    navigate(`/${tomorrow}`);
  }, [date, today, navigate]);

  const save = useCallback(() => {
    const hasEditedInLastHour =
      new Date().getTime() - lastUpdateTime <= 60000 * 60;
    if (!isLoading && hasEditedInLastHour) {
      setIsSaving(true);
      saveMemory(user, date, toSave.current).finally(() => setIsSaving(false));
    }
  }, [lastUpdateTime, isLoading, user, date]);

  const load = useCallback(() => {
    setIsLoading(true);
    loadMemory(user, date).then((text) => {
      setMemory(text || '');
      setIsLoading(false);
    });
  }, [date, setMemory, user]);

  const update = useCallback(
    (e: FormEvent) => {
      updateMemory(e);
      setLastUpdateTime(new Date().getTime());
    },
    [updateMemory],
  );

  useEffect(() => {
    load();
  }, [load]);

  const loadIfChanged = useCallback(() => {
    const noEditsInLastHour =
      new Date().getTime() - lastUpdateTime > 60000 * 60;
    if (noEditsInLastHour || memory.length === 0) {
      load();
    }
  }, [lastUpdateTime, load, memory.length]);

  useEffect(() => {
    toSave.current = memory;
  }, [memory]);

  usePageVisibilityChange({ onShow: loadIfChanged, onHide: save });

  return (
    <WritingForm
      date={date}
      updateDate={updateDate}
      goToYesterday={goToYesterday}
      goToTomorrow={goToTomorrow}
      content={memory}
      updateContent={update}
      save={save}
      isLoading={isLoading}
      isSaving={isSaving}
      today={today}
    />
  );
};

export default WritingContainer;
