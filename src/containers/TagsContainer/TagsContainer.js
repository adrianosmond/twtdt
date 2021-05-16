import { Link, useParams } from 'react-router-dom';
import { useTag } from 'contexts/TagContext';
import Typography from 'components/Typography';

const TagsContainer = () => {
  const { tagId } = useParams();
  const { allTags } = useTag();
  const tag = allTags.find((t) => t.key === tagId);

  return (
    <>
      <Link to="/tags">All tags</Link>
      {tag ? (
        <>
          <Typography as="h2" appearance="h2">
            {tag.name}
          </Typography>
          <Typography>Mentioned on:</Typography>
          <ul>
            {Object.keys(tag.dates).map((date) => (
              <li key={date}>
                <Link to={`/${date}`}>{date}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Not found</p>
      )}
    </>
  );
};

export default TagsContainer;
