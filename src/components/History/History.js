import Typography from 'components/Typography';
import { humanFriendlyDateString } from 'utils/date';

const History = ({ memories }) => (
  <div>
    {memories.map(({ date, text, key }) => (
      <div key={key} className="mb-8">
        <Typography appearance="h2">{humanFriendlyDateString(date)}</Typography>
        <p>{text}</p>
      </div>
    ))}
  </div>
);

export default History;
