import { FC, FormEvent } from 'react';
import TextArea from 'components/TextArea';
import Datepicker from 'components/Datepicker';
import Loading from 'components/Loading';
import TagButton from 'components/TagButton';
import IconButton from 'components/IconButton';
import { Icons } from 'components/Icon';

interface WritingFormProps {
  date: string;
  isSaving: boolean;
  isLoading: boolean;
  updateDate: (e: FormEvent) => void;
  goToYesterday: () => void;
  goToTomorrow: () => void;
  content: string;
  updateContent: (e: FormEvent) => void;
  today: string;
  save: () => void;
}

const WritingForm: FC<WritingFormProps> = ({
  date,
  updateDate,
  goToTomorrow,
  goToYesterday,
  content,
  updateContent,
  save,
  isSaving,
  isLoading,
  today,
}) => (
  <>
    <div className="flex justify-between mb-8">
      <div className="flex">
        <Datepicker value={date} onChange={updateDate} max={today} />
        <IconButton
          icon={Icons.CHEVRON_LEFT}
          className="ml-1 self-center"
          onClick={goToYesterday}
        />
        <IconButton
          icon={Icons.CHEVRON_RIGHT}
          className="ml-1 self-center"
          onClick={goToTomorrow}
          disabled={date === today}
        />
      </div>
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
