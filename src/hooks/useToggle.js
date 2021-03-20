import { useState } from 'react';

export default (initialState = false) => {
  const [toggled, setToggled] = useState(initialState);
  const toggle = () => setToggled((open) => !open);

  return [toggled, setToggled, toggle];
};
