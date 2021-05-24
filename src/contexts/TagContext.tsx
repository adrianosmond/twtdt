import {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
  FC,
  ChangeEvent,
} from 'react';
import {
  database,
  createTagAndAddToDate,
  addTagToDate,
  removeTagFromDate,
} from 'lib/database';
import { useUser } from './UserContext';

export enum TAG_TYPES {
  PERSON = 'PERSON',
  PLACE = 'PLACE',
  GENERIC = 'GENERIC',
}

export interface ITag {
  name: string;
  type: TAG_TYPES;
  dates: {
    [key: string]: boolean;
  };
}

export type KeyedTag = ITag & {
  key: string;
};

interface ITagContext {
  tagName: string;
  setTagName: Dispatch<SetStateAction<string>>;
  updateTagName: (e: ChangeEvent<HTMLInputElement>) => void;
  tagType: TAG_TYPES;
  updateTagType: (e: ChangeEvent<HTMLSelectElement>) => void;
  assignNewTag: (date: string) => Promise<void>;
  assignTag: (date: string, tagId: string) => void;
  removeTag: (date: string, tagId: string) => void;
  allTags: KeyedTag[];
  matchingTags: KeyedTag[];
  getTagsForDate: (date: string) => KeyedTag[];
}

const TagContext = createContext<ITagContext | null>(null);

export const TagProvider: FC = ({ children }) => {
  const user = useUser() as string;

  const [tagType, setTagType] = useState(TAG_TYPES.PERSON);
  const [tagName, setTagName] = useState('');
  const [allTags, setAllTags] = useState<KeyedTag[]>([]);

  const matchingTags =
    tagName.length === 0
      ? []
      : allTags
          .filter(({ name }) =>
            name.toLowerCase().includes(tagName.toLowerCase()),
          )
          .sort((tag1, tag2) => {
            const pos1 = tag1.name.toLowerCase().indexOf(tagName.toLowerCase());
            const pos2 = tag2.name.toLowerCase().indexOf(tagName.toLowerCase());

            if (pos1 === pos2) {
              if (tag1.name === tag2.name) {
                return 0;
              }
              return tag1.name > tag2.name ? 1 : -1;
            }

            return pos1 - pos2;
          });

  const updateTagName = (e: ChangeEvent<HTMLInputElement>) =>
    setTagName(e.target.value);

  const updateTagType = (e: ChangeEvent<HTMLSelectElement>) =>
    setTagType(e.target.value as TAG_TYPES);

  const getTagsForDate = useCallback(
    (date) =>
      allTags.filter(({ dates }) => dates && Object.keys(dates).includes(date)),
    [allTags],
  );

  const assignNewTag = useCallback(
    (date) => createTagAndAddToDate(user, tagType, tagName, date),
    [tagName, tagType, user],
  );

  const assignTag = useCallback(
    (date, tagId) => addTagToDate(user, date, tagId),
    [user],
  );

  const removeTag = useCallback(
    (date, tagId) => removeTagFromDate(user, date, tagId),
    [user],
  );

  useEffect(() => {
    const ref = database.ref(`${user}/tags/`);

    ref.on('value', (snapshot) => {
      const tags = Object.entries(snapshot.val())
        .map(([key, data]) => ({
          key,
          ...(data as ITag),
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
        removeTag,
        allTags,
        matchingTags,
        getTagsForDate,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};

export const useTag: () => ITagContext = () =>
  useContext(TagContext) as ITagContext;
