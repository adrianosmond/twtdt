import { FC } from 'react';
import TagLinkList from 'components/TagLinkList';
import { KeyedTag } from 'contexts/TagContext';

interface TagsProps {
  people: KeyedTag[];
  places: KeyedTag[];
  others: KeyedTag[];
}

const Tags: FC<TagsProps> = ({ people, places, others }) => (
  <>
    <TagLinkList heading="People" tags={people} />
    <TagLinkList heading="Places" tags={places} />
    <TagLinkList heading="Others" tags={others} />
  </>
);

export default Tags;
