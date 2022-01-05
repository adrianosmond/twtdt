import { ChangeEvent, FC } from 'react';
import Icon from 'components/Icon';
import { TAG_TYPES } from 'contexts/TagContext';

interface NewTagButtonProps {
  tagType: TAG_TYPES;
  tagName: string;
  updateTagType: (e: ChangeEvent<HTMLSelectElement>) => void;
  onAdd: () => void;
}

const NewTagButton: FC<NewTagButtonProps> = ({
  tagType,
  tagName,
  updateTagType,
  onAdd,
}) => (
  <>
    <div className="relative w-8 h-8 p-1 bg-blue-500 text-white border-r rounded-l-md">
      <Icon type={tagType} />
      <select
        className="absolute top-0 left-0 w-full h-full opacity-0"
        onChange={updateTagType}
      >
        {Object.keys(TAG_TYPES).map((type) => (
          <option value={type} key={type} selected={tagType === type}>
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
  </>
);

export default NewTagButton;
