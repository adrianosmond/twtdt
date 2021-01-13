import classes from './Datepicker.module.css';

const Datepicker = ({ value, onChange, max }) => (
  <div className={classes.wrapper}>
    <input
      type="date"
      value={value}
      onChange={onChange}
      max={max}
      className={classes.datePicker}
    />
  </div>
);

export default Datepicker;
