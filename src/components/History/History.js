import React from 'react';
import Typography from 'components/Typography';
import classes from './History.module.css';

const History = ({ memories }) => {
  return (
    <div className={classes.wrapper}>
      {memories.map(({ date, text, key }) => (
        <div key={key} className={classes.item}>
          <Typography appearance="h2">{date}</Typography>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default History;
