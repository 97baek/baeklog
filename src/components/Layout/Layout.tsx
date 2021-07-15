import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
  }
`;

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <GlobalStyle />
      <main style={{ margin: '0px', padding: '0px' }}>{children}</main>
    </>
  );
};

export default Layout;
