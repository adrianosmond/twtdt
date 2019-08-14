import React, { useState } from 'react';
import WritingForm from 'components/WritingForm';

const memoryOptions = [
  { value: 'laughed', name: 'laughed' },
  { value: 'cried', name: 'cried' },
];

const WritingContainer = () => {
  const [type, setType] = useState(memoryOptions[0].value);
  const [content, setContent] = useState('');
  const updateType = e => setType(e.target.value);
  const updateContent = e => setContent(e.target.value);
  return (
    <WritingForm
      type={type}
      updateType={updateType}
      content={content}
      updateContent={updateContent}
      memoryOptions={memoryOptions}
    />
  );
};

export default WritingContainer;
