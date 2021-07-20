import React, { createContext, useState } from 'react';

type ContextType = [
  number,
  number,
  number,
  boolean,
  boolean,
  boolean,
  (state: string) => void,
  (state: string) => void,
  (state: string) => void,
  (state: string) => void,
];

export const WindowContext = createContext<ContextType>({} as ContextType);

interface IChildren {
  children: React.ReactNode;
}

function WindowProvider({ children }: IChildren) {
  const [isProfileShowing, setIsProfileShowing] = useState(-1);
  const [isProjectsShowing, setIsProjectsShowing] = useState(-1);
  const [isBlogShowing, setIsBlogShowing] = useState(-1);
  const [isProfileOpened, setIsProfileOpened] = useState(false);
  const [isProjectsOpened, setIsProjectsOpened] = useState(false);
  const [isBlogOpened, setIsBlogOpened] = useState(false);

  let zIndex = Math.max(isProfileShowing, isProjectsShowing, isBlogShowing);

  const openWindow = (state: string) => {
    if (state === 'profile') setIsProfileOpened(true);
    else if (state === 'projects') setIsProjectsOpened(true);
    else if (state === 'blog') setIsBlogOpened(true);
  };

  const closeWindow = (state: string) => {
    if (state === 'profile') setIsProfileOpened(false);
    else if (state === 'projects') setIsProjectsOpened(false);
    else if (state === 'blog') setIsBlogOpened(false);
  };

  const showWindow = (state: string) => {
    if (state === 'profile') setIsProfileShowing(zIndex + 1);
    else if (state === 'projects') setIsProjectsShowing(zIndex + 1);
    else if (state === 'blog') setIsBlogShowing(zIndex + 1);
  };

  const minimizeWindow = (state: string) => {
    if (state === 'profile') setIsProfileShowing(-1);
    else if (state === 'projects') setIsProjectsShowing(-1);
    else if (state === 'blog') setIsBlogShowing(-1);
  };

  return (
    <WindowContext.Provider
      value={[
        isProfileShowing,
        isProjectsShowing,
        isBlogShowing,
        isProfileOpened,
        isProjectsOpened,
        isBlogOpened,
        openWindow,
        closeWindow,
        showWindow,
        minimizeWindow,
      ]}
    >
      {children}
    </WindowContext.Provider>
  );
}

export default WindowProvider;
