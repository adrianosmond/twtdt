import { FC } from 'react';
import Tag from 'components/Tag';
import { KeyedTag } from 'contexts/TagContext';

interface TagListProps {
  tags: KeyedTag[];
}

const TagList: FC<TagListProps> = ({ tags }) => (
  <ul>
    {tags.map((tag) => (
      <li key={tag.key} className="mt-2">
        <Tag tag={tag} />
      </li>
    ))}
  </ul>
);

export default TagList;
