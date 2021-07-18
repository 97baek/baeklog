import { WindowContext } from '@context/WindowContext';
import { useContext } from 'react';

export const useWindowContext = () => {
  const value = useContext(WindowContext);
  if (!value) throw new Error('Cannot find WindowContext');
  return value;
};
