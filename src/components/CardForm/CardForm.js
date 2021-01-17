import Card from 'components/Card';
import Typography from 'components/Typography';

const CardForm = ({ title, inputs, button, onSubmit }) => (
  <Card>
    <form onSubmit={onSubmit} className="flex flex-col justify-start flex-grow">
      <Typography as="h2" appearance="h3">
        {title}
      </Typography>
      <div className="flex-grow">{inputs}</div>
      <div className="self-end">{button}</div>
    </form>
  </Card>
);

export default CardForm;
