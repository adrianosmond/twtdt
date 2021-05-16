import { FC, FormEvent } from 'react';
import TextArea from 'components/TextArea';
import Datepicker from 'components/Datepicker';
import Loading from 'components/Loading';
import TagButton from 'components/TagButton';

interface WritingFormProps {
  date: string;
  isSaving: boolean;
  isLoading: boolean;
  updateDate: (e: FormEvent) => void;
  content: string;
  updateContent: (e: FormEvent) => void;
  today: string;
  save: () => void;
}

const WritingForm: FC<WritingFormProps> = ({
  date,
  updateDate,
  content,
  updateContent,
  save,
  isSaving,
  isLoading,
  today,
}) => (
  <>
    <div className="flex justify-between mb-8">
      <Datepicker value={date} onChange={updateDate} max={today} />
      <TagButton date={date} />
    </div>
    {isLoading ? (
      <Loading />
    ) : (
      <TextArea
        value={content}
        onChange={updateContent}
        onBlur={save}
        placeholder="What you did goes here..."
        className="flex-grow"
        style={{ minHeight: '12rem' }}
      />
    )}
    {isSaving && <p>Saving...</p>}
  </>
);

export default WritingForm;
