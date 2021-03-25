import { useEffect } from 'react';

export default ({ onHide, onShow } = {}) => {
  useEffect(() => {
    const visibilityChangeHandler = () => {
      if (document.hidden && onHide) {
        onHide();
      }
      if (!document.hidden && onShow) {
        onShow();
      }
    };

    document.addEventListener('visibilitychange', visibilityChangeHandler);

    return () =>
      document.removeEventListener('visibilitychange', visibilityChangeHandler);
  }, [onHide, onShow]);
};
