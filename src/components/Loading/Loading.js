import classes from './Loading.module.css';

const Loading = () => (
  <div className={classes.outer}>
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={classes.spinner}
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
