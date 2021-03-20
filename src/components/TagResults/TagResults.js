import classNames from 'classnames';
import NewTagButton from 'components/NewTagButton';
import Tag from 'components/Tag/Tag';

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
