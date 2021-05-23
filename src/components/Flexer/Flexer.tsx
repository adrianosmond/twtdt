import { FC } from 'react';
import classes from './Flexer.module.css';

const Flexer: FC = ({ children }) => (
  <div className={classes.wrapper}>{children}</div>
);

export default Flexer;
