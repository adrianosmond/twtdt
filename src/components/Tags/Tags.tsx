import { FC } from 'react';
import TagLinkList from 'components/TagLinkList';
import { KeyedTag, TAG_TYPES } from 'contexts/TagContext';

interface ITagSection {
  heading: string;
  type: TAG_TYPES;
}

interface TagsProps {
  tags: KeyedTag[];
  sections: ITagSection[];
}

const Tags: FC<TagsProps> = ({ tags, sections }) => (
  <div className="mt-6 space-y-8">
    {sections.map(({ heading, type }) => (
      <TagLinkList
        heading={heading}
        tags={tags.filter((tag) => tag.type === type)}
        tagType={type}
      />
    ))}
  </div>
);

export default Tags;
