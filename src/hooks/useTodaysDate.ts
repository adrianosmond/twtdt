import { useCallback, useState } from 'react';
import { formatDateString } from 'utils/date';
import usePageVisibilityChange from './usePageVisibilityChange';

const useTodaysDate: () => string = () => {
  const [today, setToday] = useState<string>(formatDateString(new Date()));
  const updateToday = useCallback(() => {
    setToday(formatDateString(new Date()));
  }, []);

  usePageVisibilityChange({ onShow: updateToday });

  return today;
};


export default useTodaysDate;