import { FC, useCallback } from 'react';
import { useTag } from 'contexts/TagContext';
import TagResults from 'components/TagResults';

interface TagFormProps {
  onActionComplete: () => void;
  date: string;
}

const TagForm: FC<TagFormProps> = ({ onActionComplete, date }) => {
  const {
    tagName,
    updateTagName,
    tagType,
    updateTagType,
    assignNewTag,
    assignTag,
    matchingTags,
  } = useTag();

  const assignNewTagAndCloseMenu = useCallback(() => {
    assignNewTag(date);
    onActionComplete();
  }, [assignNewTag, date, onActionComplete]);

  const assignTagAndCloseMenu = useCallback(
    (tagId) => {
      assignTag(date, tagId);
      onActionComplete();
    },
    [assignTag, date, onActionComplete],
  );

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
          <TagResults
            results={matchingTags}
            tagName={tagName}
            tagType={tagType}
            updateTagType={updateTagType}
            onAssign={assignTagAndCloseMenu}
            onAdd={assignNewTagAndCloseMenu}
            className="max-h-60 overflow-y-auto"
          />
        </div>
      )}
    </div>
  );
};

export default TagForm;
