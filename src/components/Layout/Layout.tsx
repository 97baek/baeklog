import Taskbar from '@components/Taskbar';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    cursor:default;
  }

  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
`;

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <GlobalStyle />
      <main style={{ margin: '0px', padding: '0px', position: 'relative', height: '100vh' }}>
        {children}
      </main>
      <Taskbar />
    </>
  );
};

export default Layout;
