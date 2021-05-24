import { FC } from 'react';
import TagTypeIcon from 'components/TagTypeIcon';
import Typography from 'components/Typography';
import { TAG_TYPES } from 'contexts/TagContext';

interface TagHeadingProps {
  heading: string;
  tagType: TAG_TYPES;
}

const TagHeading: FC<TagHeadingProps> = ({ heading, tagType }) => (
  <Typography appearance="h2" tagName="h2" className="flex items-center">
    <TagTypeIcon type={tagType} className="w-6 h-6 mr-1 fill-current" />
    {heading}
  </Typography>
);

export default TagHeading;
