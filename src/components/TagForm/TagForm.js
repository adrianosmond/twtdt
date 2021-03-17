import { useTag } from 'contexts/TagContext';
import TagTypeIcon from 'components/TagTypeIcon';
import classNames from 'classnames';

const TagForm = ({ addTag, setTag, matchingTags }) => {
  const { tagName, updateTagName, tagType, updateTagType } = useTag();

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a tag name"
        value={tagName}
        onChange={updateTagName}
        className="w-full h-8 px-2 py-1 border-b-2 border-gray-300 bg-transparent appearance-none rounded-none placeholder-gray-500 outline-none focus:border-blue-400"
      />
      {tagName.length > 0 && (
        <div className="mt-2">
          <ul className="max-h-60 overflow-y-auto">
            {matchingTags.map((tag) => (
              <li key={tag.key}>
                <button
                  className="flex items-center w-full p-2 text-left"
                  onClick={() => setTag(tag.key)}
                >
                  <TagTypeIcon
                    type={tag.type}
                    className="w-6 h-6 mr-2 fill-current"
                  />
                  {tag.name}
                </button>
              </li>
            ))}
            <li
              className={classNames('flex items-center w-full mt-4', {
                'pt-4 border-t': matchingTags.length > 0,
              })}
            >
              <div className="relative w-8 h-8 p-1 bg-blue-500 text-white border-r rounded-l-md">
                <TagTypeIcon type={tagType} />
                <select
                  className="absolute top-0 left-0 w-full h-full opacity-0"
                  onChange={updateTagType}
                >
                  <option value="PERSON">Person</option>
                  <option value="PLACE">Place</option>
                  <option value="GENERIC">Generic</option>
                </select>
              </div>

              <span className="flex-grow px-4">Add {tagName}</span>

              <button
                className="w-8 h-8 p-1 bg-blue-500 text-white rounded-r-md"
                onClick={addTag}
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
        </div>
      )}
    </div>
  );
};

export default TagForm;
