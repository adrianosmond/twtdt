import { FC } from 'react';
import classNames from 'classnames';
import TagTypeIcon from 'components/TagTypeIcon';
import { ITag } from 'contexts/TagContext';

interface TagProps {
  tag: ITag;
  appearance?: string;
}

const Tag: FC<TagProps> = ({ tag, appearance = 'bg-blue-500 text-white' }) => (
  <div
    className={classNames(
      'flex items-center p-2 rounded-md text-sm',
      appearance,
    )}
  >
    <TagTypeIcon type={tag.type} className="w-4 h-4 fill-current mr-2" />
    {tag.name}
  </div>
);

export default Tag;
