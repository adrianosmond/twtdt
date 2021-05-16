import {
  useState,
  useContext,
  createContext,
  FC,
  Dispatch,
  SetStateAction,
  FormEvent,
} from 'react';

interface IMemory {
  memory: string;
  setMemory: Dispatch<SetStateAction<string>>;
  updateMemory: (e: FormEvent) => void;
}

const MemoryContext = createContext<IMemory | null>(null);

export const MemoryProvider: FC = ({ children }) => {
  const [memory, setMemory] = useState('');
  const updateMemory = (e: FormEvent) =>
    setMemory((e.target as HTMLInputElement).value);

  return (
    <MemoryContext.Provider
      value={{
        memory,
        setMemory,
        updateMemory,
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
};

export const useMemory: () => IMemory = () =>
  useContext(MemoryContext) as IMemory;
