import TagLinkList from 'components/TagLinkList';

const Tags = ({ people, places, others }) => (
  <>
    <TagLinkList heading="People" tags={people} />
    <TagLinkList heading="Places" tags={places} />
    <TagLinkList heading="Others" tags={others} />
  </>
);

export default Tags;
