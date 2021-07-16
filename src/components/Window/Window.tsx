import React from 'react';
import TopBar from './Common/TopBar';
import { Contents, WindowContainer, WindowWrap } from './styles';

const Window = ({ icon, title, children }) => {
  return (
    <WindowWrap>
      <WindowContainer>
        <TopBar icon={'P'} title={'프로필'} />
        <Contents>{children}</Contents>
      </WindowContainer>
    </WindowWrap>
  );
};

export default Window;
