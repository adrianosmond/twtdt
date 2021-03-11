import { useEffect, useState } from 'react';

const AppWrapper = ({ children }) => {
  const [height, setHeight] = useState(`${visualViewport.height}px`);

  useEffect(() => {
    const handler = (event) => {
      setHeight(`${event.target.height}px`);
    };
    window.visualViewport.addEventListener('resize', handler);
    return () => window.visualViewport.removeEventListener('resize', handler);
  }, []);

  return (
    <div
      className="flex-grow flex flex-col m-0 mx-auto w-full max-w-3xl py-6 px-4 sm:p-8 md:relative"
      style={{ height }}
    >
      {children}
    </div>
  );
};

export default AppWrapper;
