import React, { createContext, useState } from 'react';

type ContextType = [boolean, boolean, boolean, (state: string) => void, (state: string) => void];

export const WindowContext = createContext<ContextType>({} as ContextType);

interface IChildren {
  children: React.ReactNode;
}

function WindowProvider({ children }: IChildren) {
  const [isProfileOpened, setIsProfileOpened] = useState(false);
  const [isProjectsOpened, setIsProjectsOpened] = useState(false);
  const [isBlogOpened, setIsBlogOpened] = useState(false);

  const openWindow = (state: string) => {
    if (state === 'profile') setIsProfileOpened(true);
    else if (state === 'projects') setIsProjectsOpened(true);
    else if (state === 'blog') setIsBlogOpened(true);

    console.log(state, isProfileOpened, isProjectsOpened, isBlogOpened, '변경!');
  };

  const closeWindow = (state: string) => {
    if (state === 'profile') setIsProfileOpened(false);
    else if (state === 'projects') setIsProjectsOpened(false);
    else if (state === 'blog') setIsBlogOpened(false);

    console.log(state, isProfileOpened, isProjectsOpened, isBlogOpened, '변경!');
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
