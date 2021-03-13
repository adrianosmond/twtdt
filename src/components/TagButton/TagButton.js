import { useCallback, useState } from 'react';
import { useTag } from 'contexts/TagContext';
import TagForm from 'components/TagForm';

const TagButton = ({ date }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { matchingTags, assignNewTag, assignTag, setTagName } = useTag();
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setTagName('');
  }, [setTagName]);

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
        className="w-9 h-9 rounded-full bg-blue-500 text-white focus:outline-none"
        onClick={toggleMenu}
      >
        #
      </button>
      {menuOpen && (
        <div className="absolute w-72 right-0 top-10 p-2 bg-white shadow-md rounded-md">
          <TagForm
            matchingTags={matchingTags}
            addTag={assignNewTagAndCloseMenu}
            setTag={assignTagAndCloseMenu}
          />
        </div>
      )}
    </div>
  );
};

export default TagButton;
