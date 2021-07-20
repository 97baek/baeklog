import * as React from 'react';
import styled from 'styled-components';
import Taskbar from '@components/Taskbar';
import Layout from '@components/Layout';
import Windows from '@components/Windows';

const IndexPage = () => {
  return (
    <Layout>
      <WallPaper />
      <Windows />
      <Taskbar />
    </Layout>
  );
};

export default IndexPage;

const WallPaper = styled.main`
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: calc(100vh - 60px);
  background-color: black;
`;
