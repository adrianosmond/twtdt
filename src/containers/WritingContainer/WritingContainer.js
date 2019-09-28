import React, { useState } from 'react';
import { createMemory, updateMemory } from 'lib/database';
import { useApp } from 'contexts/AppContext';
import WritingForm from 'components/WritingForm';

const memoryOptions = [
  { value: 'laughed', name: 'laughed' },
  { value: 'cried', name: 'cried' },
];

const WritingContainer = () => {
  const { user, date } = useApp();
  const [id, setId] = useState(null);
  const [type, setType] = useState(memoryOptions[0].value);
  const [content, setContent] = useState('');
  const updateType = e => {
    setContent('');
    setId(null);
    setType(e.target.value);
  };
  const updateContent = e => setContent(e.target.value);
  const saveMemory = () => {
    if (id) {
      return updateMemory(user, date, id, type, content);
    }
    return createMemory(user, date, type, content).then(ref => setId(ref.key));
  };

  return (
    <WritingForm
      type={type}
      updateType={updateType}
      content={content}
      updateContent={updateContent}
      memoryOptions={memoryOptions}
      saveMemory={saveMemory}
    />
  );
};

export default WritingContainer;
