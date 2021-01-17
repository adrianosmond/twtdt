import TextArea from 'components/TextArea';
import Datepicker from 'components/Datepicker';
import Loading from 'components/Loading';

const WritingForm = ({
  date,
  updateDate,
  content,
  updateContent,
  save,
  isSaving,
  isLoading,
  today,
}) => (
  <div>
    <div className="mb-8">
      <Datepicker value={date} onChange={updateDate} max={today} />
    </div>
    {isLoading ? (
      <Loading />
    ) : (
      <TextArea
        value={content}
        onChange={updateContent}
        save={save}
        placeholder="What you did goes here..."
      />
    )}
    {isSaving && <p>Saving...</p>}
  </div>
);

export default WritingForm;
