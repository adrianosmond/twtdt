import classNames from 'classnames';
import { useCallback, useState } from 'react';
import { useTag } from 'contexts/TagContext';
import TagForm from 'components/TagForm';
import TagTypeIcon from 'components/TagTypeIcon';

const TagButton = ({ date }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    matchingTags,
    assignNewTag,
    assignTag,
    setTagName,
    getTagsForDate,
  } = useTag();
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setTagName('');
  }, [setTagName]);

  const todaysTags = getTagsForDate(date);
  const hasTags = todaysTags.length > 0;

  const toggleMenu = () => setMenuOpen((open) => !open);

  const assignNewTagAndCloseMenu = useCallback(() => {
    assignNewTag(date);
    closeMenu();
  }, [assignNewTag, date, closeMenu]);

  const assignTagAndCloseMenu = useCallback(
    (tagId) => {
      assignTag(date, tagId);
      closeMenu();
    },
    [assignTag, date, closeMenu],
  );

  return (
    <div className="relative">
      <button
        className={classNames(
          'w-9 h-9 rounded-full focus:outline-none text-white',
          {
            'bg-blue-500': hasTags,
            'bg-gray-500': !hasTags,
          },
        )}
        onClick={toggleMenu}
      >
        #
      </button>
      {menuOpen && (
        <div className="absolute w-72 right-0 top-10 p-2 bg-white dark:bg-gray-700 shadow-md rounded-md">
          <TagForm
            matchingTags={matchingTags}
            addTag={assignNewTagAndCloseMenu}
            setTag={assignTagAndCloseMenu}
          />
          {hasTags && (
            <ul className="mt-4">
              {todaysTags.map((tag) => (
                <li key={tag.key} className="mt-2">
                  <div className="flex align-middle bg-blue-500 text-white p-2 rounded-md">
                    <TagTypeIcon
                      type={tag.type}
                      className="w-6 h-6 fill-current mr-2"
                    />
                    {tag.name}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default TagButton;
