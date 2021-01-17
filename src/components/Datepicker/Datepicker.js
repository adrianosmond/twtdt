const Datepicker = ({ value, onChange, max }) => (
  <div className="inline-block p-1 border-b-2 border-yellow-500">
    <input
      type="date"
      value={value}
      onChange={onChange}
      max={max}
      className="rounded-none appearance-none bg-transparent outline-none"
    />
  </div>
);

export default Datepicker;
