import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import TagTypeIcon from 'components/TagTypeIcon';
import { KeyedTag } from 'contexts/TagContext';

interface TagProps {
  tag: KeyedTag;
  appearance?: string;
  removeTag?: (tagId: string) => void;
}

const Tag: FC<TagProps> = ({
  tag,
  appearance = 'bg-blue-500 text-white',
  removeTag,
}) => (
  <div className={classNames('flex rounded-md text-sm', appearance)}>
    {removeTag ? (
      <>
        <Link
          to={`/tags/${tag.key}`}
          className="flex items-center p-2 flex-grow"
        >
          <TagTypeIcon type={tag.type} className="w-4 h-4 fill-current mr-2" />
          {tag.name}
        </Link>
        <button
          className="w-8 p-2 flex-shrink-0 border-l border-blue-400"
          onClick={() => removeTag(tag.key)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-current"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </>
    ) : (
      <div className="flex items-center p-2 flex-grow">
        <TagTypeIcon type={tag.type} className="w-4 h-4 fill-current mr-2" />
        {tag.name}
      </div>
    )}
  </div>
);

export default Tag;
