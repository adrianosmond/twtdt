import { ChangeEvent, FC } from 'react';
import classNames from 'classnames';
import { KeyedTag, TAG_TYPES } from 'contexts/TagContext';
import NewTagButton from 'components/NewTagButton';
import Tag from 'components/Tag/Tag';

interface TagResultsProps {
  results: KeyedTag[];
  tagName: string;
  tagType: TAG_TYPES;
  className: string;
  onAssign: (key: string) => void;
  onAdd: () => void;
  updateTagType: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const TagResults: FC<TagResultsProps> = ({
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
      <NewTagButton
        tagType={tagType}
        tagName={tagName}
        updateTagType={updateTagType}
        onAdd={onAdd}
      />
    </li>
  </ul>
);

export default TagResults;
