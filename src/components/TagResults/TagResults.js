import classNames from 'classnames';
import Tag from 'components/Tag/Tag';
import TagTypeIcon from 'components/TagTypeIcon';
import { TAG_TYPES } from 'contexts/TagContext';

const TagResults = ({
  results,
  tagName,
  tagType,
  onAssign,
  onAdd,
  updateTagType,
  className,
}) => (
  <ul className={className}>
    {results.map((tag) => (
      <li key={tag.key}>
        <button
          className="flex items-center w-full text-left"
          onClick={() => onAssign(tag.key)}
        >
          <Tag tag={tag} appearance="w-full" />
        </button>
      </li>
    ))}
    <li
      className={classNames('flex items-center w-full mt-4', {
        'pt-4 border-t': results.length > 0,
      })}
    >
      <div className="relative w-8 h-8 p-1 bg-blue-500 text-white border-r rounded-l-md">
        <TagTypeIcon type={tagType} />
        <select
          className="absolute top-0 left-0 w-full h-full opacity-0"
          onChange={updateTagType}
        >
          {Object.keys(TAG_TYPES).map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <span className="flex-grow px-4 text-sm">Add {tagName}</span>

      <button
        className="w-8 h-8 p-1 bg-blue-500 text-white rounded-r-md"
        onClick={onAdd}
        disabled={tagName.length === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
    </li>
  </ul>
);

export default TagResults;
