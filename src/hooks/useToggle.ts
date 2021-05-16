import { Dispatch, SetStateAction, useState } from 'react';

const useToggle: (
  initialState: boolean,
) => [boolean, Dispatch<SetStateAction<boolean>>, () => void] = (
  initialState = false,
) => {
  const [toggled, setToggled] = useState(initialState);
  const toggle = () => setToggled((open) => !open);

  return [toggled, setToggled, toggle];
};

export default useToggle;
