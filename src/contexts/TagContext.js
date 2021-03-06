import {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { database, createTagAndAddToDate, addTagToDate } from 'lib/database';
import { useUser } from './UserContext';

export const TAG_TYPES = {
  PERSON: 'PERSON',
  PLACE: 'PLACE',
  GENERIC: 'GENERIC',
};

const TagContext = createContext();

export const TagProvider = ({ children }) => {
  const user = useUser();

  const [tagType, setTagType] = useState(TAG_TYPES.PERSON);
  const [tagName, setTagName] = useState('');
  const [allTags, setAllTags] = useState([]);

  const matchingTags =
    tagName.length === 0
      ? []
      : allTags.filter(({ name }) =>
          name.toLowerCase().includes(tagName.toLowerCase()),
        );

  const updateTagName = (e) => setTagName(e.target.value);
  const updateTagType = (e) => setTagType(e.target.value);

  const assignNewTag = useCallback(
    (date) => createTagAndAddToDate(user, tagType, tagName, date),
    [tagName, tagType, user],
  );

  const assignTag = useCallback(
    (date, tagId) => addTagToDate(user, date, tagId),
    [user],
  );

  useEffect(() => {
    const ref = database.ref(`${user}/tags/`);

    ref.on('value', (snapshot) => {
      const tags = Object.entries(snapshot.val())
        .map(([key, data]) => ({
          key,
          ...data,
        }))
        .sort((a, b) => {
          if (a.name === b.name) {
            return 0;
          }
          return a.name > b.name ? 1 : -1;
        });
      if (tags.length > 0) {
        setAllTags(tags);
      }
    });

    return () => ref.off('value');
  }, [user]);

  return (
    <TagContext.Provider
      value={{
        tagName,
        setTagName,
        updateTagName,
        tagType,
        updateTagType,
        assignNewTag,
        assignTag,
        allTags,
        matchingTags,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};

export const useTag = () => useContext(TagContext);
