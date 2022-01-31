import { useEffect } from 'react';

type Options = {
  onHide?: () => void;
  onShow?: () => void;
};

const usePageVisibilityChange: (options: Options) => void = ({
  onHide,
  onShow,
} = {}) => {
  useEffect(() => {
    const visibilityChangeHandler = () => {
      if (document.hidden && onHide) {
        onHide();
      }
      if (!document.hidden && onShow) {
        onShow();
      }
    };

    const focusHandler = () => {
      if (onShow) onShow();
    };

    const blurHandler = () => {
      if (onHide) onHide();
    };

    document.addEventListener('visibilitychange', visibilityChangeHandler);
    window.addEventListener('focus', focusHandler);
    window.addEventListener('blur', blurHandler);

    return () => {
      document.removeEventListener('visibilitychange', visibilityChangeHandler);
      window.removeEventListener('focus', focusHandler);
      window.removeEventListener('blur', blurHandler);
    };
  }, [onHide, onShow]);
};

export default usePageVisibilityChange;
