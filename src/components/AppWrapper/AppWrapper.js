import { useEffect, useState, useRef } from 'react';

const AppWrapper = ({ children }) => {
  const wrapperEl = useRef(null);
  const [minHeight, setMinHeight] = useState(`${visualViewport.height}px`);

  useEffect(() => {
    const handler = (event) => {
      requestAnimationFrame(() => {
        wrapperEl.current.scrollIntoView();
      });
      setMinHeight(`${event.target.height}px`);
    };
    window.visualViewport.addEventListener('resize', handler);
    return () => window.visualViewport.removeEventListener('resize', handler);
  }, []);

  return (
    <div
      ref={wrapperEl}
      className="flex-grow flex flex-col m-0 mx-auto w-full max-w-3xl py-6 px-4 sm:p-8 md:relative"
      style={{ minHeight }}
    >
      {children}
    </div>
  );
};

export default AppWrapper;
