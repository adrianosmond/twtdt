import { useEffect } from 'react';

type Options = {
  onHide?: () => void
  onShow?: () => void
}

const usePageVisibilityChange: (options: Options) => void = ({onHide, onShow} = {}) => {
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

export default usePageVisibilityChange;
