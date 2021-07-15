import * as React from 'react';
import Taskbar from '@components/Taskbar';
import styled from 'styled-components';
import Layout from '@components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <WallPaper />
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
