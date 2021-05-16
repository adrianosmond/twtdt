import { FC } from 'react';

const Loading: FC = () => (
  <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="stroke-current w-12 h-12 animate-spin"
    >
      <circle cx="12" cy="12" r="10.5" strokeWidth="3" strokeOpacity=".3" />
      <circle
        cx="12"
        cy="12"
        r="10.5"
        strokeWidth="3"
        strokeDasharray="70"
        strokeDashoffset="50"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export default Loading;
