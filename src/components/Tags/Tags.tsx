import { FC } from 'react';
import TagLinkList from 'components/TagLinkList';
import { KeyedTag, TAG_TYPES } from 'contexts/TagContext';

interface TagsProps {
  people: KeyedTag[];
  places: KeyedTag[];
  others: KeyedTag[];
}

const Tags: FC<TagsProps> = ({ people, places, others }) => (
  <div className="mt-6 space-y-8">
    <TagLinkList heading="People" tags={people} tagType={TAG_TYPES.PERSON} />
    <TagLinkList heading="Places" tags={places} tagType={TAG_TYPES.PLACE} />
    <TagLinkList heading="Others" tags={others} tagType={TAG_TYPES.GENERIC} />
  </div>
);

export default Tags;
