import { FC } from 'react';
import Tag from 'components/Tag';
import { KeyedTag } from 'contexts/TagContext';

interface TagListProps {
  tags: KeyedTag[];
  removeTag: (tagId: string) => void;
}

const TagList: FC<TagListProps> = ({ tags, removeTag }) => (
  <ul>
    {tags.map((tag) => (
      <li key={tag.key} className="mt-2">
        <Tag tag={tag} removeTag={removeTag} />
      </li>
    ))}
  </ul>
);

export default TagList;
