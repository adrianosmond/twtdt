import { FC, useCallback } from 'react';
import classNames from 'classnames';
import { useTag } from 'contexts/TagContext';
import useToggle from 'hooks/useToggle';
import TagForm from 'components/TagForm';
import ToggleMenu from 'components/ToggleMenu';
import TagList from 'components/TagList';

interface TagButtonProps {
  date: string;
}

const TagButton: FC<TagButtonProps> = ({ date }) => {
  const [menuOpen, setMenuOpen, toggleMenu] = useToggle(false);
  const { setTagName, getTagsForDate, tagName } = useTag();

  const resetForm = useCallback(() => {
    setMenuOpen(false);
    setTagName('');
  }, [setTagName, setMenuOpen]);

  const todaysTags = getTagsForDate(date);
  const hasTags = todaysTags.length > 0;

  return (
    <ToggleMenu
      buttonClasses={classNames(
        'w-9 h-9 rounded-full focus:outline-none text-white',
        {
          'bg-blue-500': hasTags,
          'bg-gray-500': !hasTags,
        },
      )}
      buttonContent="#"
      toggleMenu={toggleMenu}
      menuOpen={menuOpen}
      menuContent={
        <>
          <TagForm onActionComplete={resetForm} date={date} />
          {hasTags && !tagName && (
            <div className="mt-4">
              <TagList tags={todaysTags} />
            </div>
          )}
        </>
      }
    />
  );
};

export default TagButton;
