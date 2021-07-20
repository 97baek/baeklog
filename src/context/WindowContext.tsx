import React, { createContext, useState } from 'react';

type ContextType = [number, number, number, (state: string) => void, (state: string) => void];

export const WindowContext = createContext<ContextType>({} as ContextType);

interface IChildren {
  children: React.ReactNode;
}

function WindowProvider({ children }: IChildren) {
  const [isProfileOpened, setIsProfileOpened] = useState(-1);
  const [isProjectsOpened, setIsProjectsOpened] = useState(-1);
  const [isBlogOpened, setIsBlogOpened] = useState(-1);

  let zIndex = Math.max(isProfileOpened, isProjectsOpened, isBlogOpened);

  const openWindow = (state: string) => {
    if (state === 'profile') setIsProfileOpened(zIndex + 1);
    else if (state === 'projects') setIsProjectsOpened(zIndex + 1);
    else if (state === 'blog') setIsBlogOpened(zIndex + 1);
  };

  const closeWindow = (state: string) => {
    if (state === 'profile') setIsProfileOpened(-1);
    else if (state === 'projects') setIsProjectsOpened(-1);
    else if (state === 'blog') setIsBlogOpened(-1);
  };

  return (
    <WindowContext.Provider
      value={[isProfileOpened, isProjectsOpened, isBlogOpened, openWindow, closeWindow]}
    >
      {children}
    </WindowContext.Provider>
  );
}

export default WindowProvider;
