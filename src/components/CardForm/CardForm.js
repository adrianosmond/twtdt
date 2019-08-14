import React from 'react';
import Card from 'components/Card';
import Typography from 'components/Typography';
import classes from './CardForm.module.css';

const CardForm = ({ title, inputs, button, onSubmit }) => (
  <Card>
    <form onSubmit={onSubmit} className={classes.form}>
      <Typography as="h2" appearance="h3">
        {title}
      </Typography>
      <div className={classes.inputs}>{inputs}</div>
      <div className={classes.button}>{button}</div>
    </form>
  </Card>
);

export default CardForm;
