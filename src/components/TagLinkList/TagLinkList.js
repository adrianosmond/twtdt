import { Link } from 'react-router-dom';
import Typography from 'components/Typography';

const TagLinkList = ({ heading, tags }) => (
  <>
    <Typography appearance="h2" as="h2" className="mt-6">
      {heading}
    </Typography>
    <ul>
      {tags.map((tag) => (
        <li key={tag.key}>
          <Link to={`/tags/${tag.key}`}>{tag.name}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default TagLinkList;
