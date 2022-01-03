import { FC } from 'react';
import Tags from 'components/Tags';
import { useTag, TAG_TYPES } from 'contexts/TagContext';

const AllTagsContainer: FC = () => {
  const { allTags } = useTag();

  const sections = [
    {
      heading: 'People',
      type: TAG_TYPES.PERSON,
    },
    {
      heading: 'Places',
      type: TAG_TYPES.PLACE,
    },
    {
      heading: 'Films',
      type: TAG_TYPES.FILM,
    },
    {
      heading: 'Others',
      type: TAG_TYPES.GENERIC,
    },
  ];

  return <Tags tags={allTags} sections={sections} />;
};

export default AllTagsContainer;
