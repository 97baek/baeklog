import React from 'react';
import TopBar from '@components/Windows/Common/TopBar';
import { Contents, WindowContainer, WindowWrap } from './styles';

const Window = ({ icon, title, isShowing, isOpened, children }: any) => {
  // console.log(isOpened);
  return (
    <WindowWrap isShowing={isShowing} isOpened={isOpened}>
      <WindowContainer>
        <TopBar icon={icon} title={title} />
        <Contents>{children}</Contents>
      </WindowContainer>
    </WindowWrap>
  );
};

export default Window;
