import { VFC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTag } from 'contexts/TagContext';
import LinkList from 'components/LinkList';
import Typography from 'components/Typography';
import { humanFriendlyDateString } from 'utils/date';
import TagHeading from 'components/TagHeading';

const TagsContainer: VFC = () => {
  const { tagId } = useParams();
  const { allTags } = useTag();
  const tag = allTags.find((t) => t.key === tagId);

  return (
    <>
      <Link to="/tags" className="flex items-center mb-2 text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-current w-4 h-4 mr-1"
        >
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
        All tags
      </Link>
      {tag ? (
        <>
          <TagHeading heading={tag.name} tagType={tag.type} />
          <Typography appearance="h3" className="mb-2">
            Mentioned on:
          </Typography>
          <LinkList
            links={Object.keys(tag.dates).map((date) => ({
              to: `/${date}`,
              key: date,
              text: humanFriendlyDateString(new Date(date)),
            }))}
          />
        </>
      ) : (
        <p>Not found</p>
      )}
    </>
  );
};

export default TagsContainer;
