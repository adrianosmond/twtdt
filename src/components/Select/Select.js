const Select = ({ value, onChange, options }) => (
  <div className="relative inline-block p-1 border-b-2 border-yellow-500">
    <div>{options.find((o) => o.value === value).name}</div>
    <select
      value={value}
      onChange={onChange}
      className="absolute inset-0 opacity-0 appearance-none outline-none border-0 background-transparent text-center"
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
