import { Link } from 'react-router-dom';
import Typography from 'components/Typography';
import { KeyedTag } from 'contexts/TagContext';
import { FC } from 'react';

interface TagLinkListProps {
  heading: string;
  tags: KeyedTag[];
}

const TagLinkList: FC<TagLinkListProps> = ({ heading, tags }) => (
  <>
    <Typography appearance="h2" tagName="h2" className="mt-6">
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
