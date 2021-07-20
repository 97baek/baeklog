import React from 'react';
import TopBar from '@components/Windows/Common/TopBar';
import { Contents, WindowContainer, WindowWrap } from './styles';

const Window = ({ icon, title, isOpen, children }: any) => {
  console.log(isOpen);
  return (
    <WindowWrap isOpen={isOpen}>
      <WindowContainer>
        <TopBar icon={icon} title={title} />
        <Contents>{children}</Contents>
      </WindowContainer>
    </WindowWrap>
  );
};

export default Window;
