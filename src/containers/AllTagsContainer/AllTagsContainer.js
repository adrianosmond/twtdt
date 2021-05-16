import Tags from 'components/Tags';
import { useTag, TAG_TYPES } from 'contexts/TagContext';

const AllTagsContainer = () => {
  const { allTags } = useTag();

  const people = allTags.filter((tag) => tag.type === TAG_TYPES.PERSON);
  const places = allTags.filter((tag) => tag.type === TAG_TYPES.PLACE);
  const generic = allTags.filter((tag) => tag.type === TAG_TYPES.GENERIC);

  return <Tags people={people} places={places} others={generic} />;
};

export default AllTagsContainer;
