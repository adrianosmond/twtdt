import { useCallback, useState } from 'react';
import { formatDateString } from 'utils/date';
import usePageVisibilityChange from './usePageVisibilityChange';

export default () => {
  const [today, setToday] = useState(formatDateString(new Date()));
  const updateToday = useCallback(() => {
    setToday(formatDateString(new Date()));
  }, []);

  usePageVisibilityChange({ onShow: updateToday });

  return today;
};
