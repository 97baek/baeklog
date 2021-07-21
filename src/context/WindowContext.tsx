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

  const toggleWindow = (state: string, control: boolean) => {
    if (state === 'profile') setIsProfileOpened(control);
    else if (state === 'projects') setIsProjectsOpened(control);
    else if (state === 'blog') setIsBlogOpened(control);
  };

  const controlWindow = (state: string, control: number) => {
    if (state === 'profile') setIsProfileShowing(control);
    else if (state === 'projects') setIsProjectsShowing(control);
    else if (state === 'blog') setIsBlogShowing(control);
  };

  const openWindow = (state: string) => toggleWindow(state, true);
  const closeWindow = (state: string) => toggleWindow(state, false);
  const showWindow = (state: string) => controlWindow(state, zIndex + 1);
  const minimizeWindow = (state: string) => controlWindow(state, -1);

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
