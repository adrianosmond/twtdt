import Typography from 'components/Typography';

const History = ({ memories }) => (
  <div>
    {memories.map(({ date, text, key }) => (
      <div key={key} className="mb-6">
        <Typography appearance="h2">{date}</Typography>
        <p>{text}</p>
      </div>
    ))}
  </div>
);

export default History;
