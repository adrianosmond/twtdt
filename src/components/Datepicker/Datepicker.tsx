import { FC, FormEvent } from 'react';

interface DatepickerProps {
  value: string;
  onChange: (e: FormEvent) => void;
  max: string;
}

const Datepicker: FC<DatepickerProps> = ({ value, onChange, max }) => (
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
