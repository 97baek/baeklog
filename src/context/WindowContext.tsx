import React, { createContext, useState } from 'react';

type ContextType = [boolean, boolean, boolean, (state: boolean) => void];

export const WindowContext = createContext<ContextType>({} as ContextType);

interface IChildren {
  children: React.ReactNode;
}

function WindowProvider({ children }: IChildren) {
  const [isProfileOpened, setIsProfileOpened] = useState(false);
  const [isProjectsOpened, setIsProjectsOpened] = useState(false);
  const [isBlogOpened, setIsBlogOpened] = useState(false);

  const toggleWindow = (state: boolean) => {
    const changedState = state === true ? false : true;

    if (state === isProfileOpened) setIsProfileOpened(changedState);
    else if (state === isProjectsOpened) setIsProjectsOpened(changedState);
    else if (state === isBlogOpened) setIsBlogOpened(changedState);

    console.log(state, '변경!');
  };

  return (
    <WindowContext.Provider value={[isProfileOpened, isProjectsOpened, isBlogOpened, toggleWindow]}>
      {children}
    </WindowContext.Provider>
  );
}

export default WindowProvider;
