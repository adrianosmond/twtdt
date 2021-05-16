import { FC, FormEvent, ReactNode } from 'react';
import Card from 'components/Card';
import Typography from 'components/Typography';

interface CardFormProps {
  title: string;
  inputs: ReactNode;
  button: ReactNode;
  onSubmit: (e: FormEvent) => void;
}

const CardForm: FC<CardFormProps> = ({ title, inputs, button, onSubmit }) => (
  <Card>
    <form onSubmit={onSubmit} className="flex flex-col justify-start flex-grow">
      <Typography tagName="h2" appearance="h3">
        {title}
      </Typography>
      <div className="flex-grow">{inputs}</div>
      <div className="self-end">{button}</div>
    </form>
  </Card>
);

export default CardForm;
