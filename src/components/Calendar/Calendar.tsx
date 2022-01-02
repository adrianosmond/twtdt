import { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { IHistory } from 'contexts/HistoryContext';

const Calendar: FC<IHistory> = ({ entries, dates }) => (
  <div className="grid grid-cols-7 gap-4 text-center">
    <div className="font-bold">M</div>
    <div className="font-bold">T</div>
    <div className="font-bold">W</div>
    <div className="font-bold">T</div>
    <div className="font-bold">F</div>
    <div className="font-bold">S</div>
    <div className="font-bold">S</div>
    {dates.map(({ day, yearStr, monthStr, dayStr, inMonth }) => {
      const canLink = inMonth && entries.includes(dayStr);
      const Component = (canLink ? Link : 'div') as keyof JSX.IntrinsicElements;

      return (
        <Component
          {...(canLink ? { to: `/${yearStr}-${monthStr}-${dayStr}` } : {})}
          key={`${yearStr}-${monthStr}-${dayStr}`}
          className={classNames({
            'flex flex-col items-center': true,
            'opacity-30': !inMonth,
          })}
        >
          {day}
          <div
            className={classNames({
              'w-2 h-2 rounded full bg-yellow-500 m-2': true,
              'opacity-0': !canLink,
            })}
          ></div>
        </Component>
      );
    })}
  </div>
);

export default Calendar;
