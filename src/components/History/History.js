import React from 'react';
import Typography from 'components/Typography';
import classes from './History.module.css';

const History = ({ memories }) => {
  return (
    <div className={classes.wrapper}>
      {memories.map(({ date, type, text, key }) => (
        <div key={key} className={classes.item}>
          <Typography appearance="h2">{date}</Typography>
          <p>
            I {type} because {text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default History;
