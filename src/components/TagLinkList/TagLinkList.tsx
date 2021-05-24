import { FC } from 'react';
import { KeyedTag, TAG_TYPES } from 'contexts/TagContext';
import LinkList from 'components/LinkList';
import TagHeading from 'components/TagHeading';

interface TagLinkListProps {
  heading: string;
  tags: KeyedTag[];
  tagType: TAG_TYPES;
}

const TagLinkList: FC<TagLinkListProps> = ({ heading, tags, tagType }) => (
  <div>
    <TagHeading heading={heading} tagType={tagType} />
    {tags.length === 0 ? (
      <p className="text-sm text-gray-600">None yet</p>
    ) : (
      <LinkList
        links={tags.map((tag) => ({
          to: `/tags/${tag.key}`,
          key: tag.key,
          text: tag.name,
        }))}
      />
    )}
  </div>
);

export default TagLinkList;
