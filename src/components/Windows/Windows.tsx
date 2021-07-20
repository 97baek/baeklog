import React from 'react';
import Blog from './Blog';
import Window from './Common/Window';
import Profile from './Profile';
import Projects from './Projects';
import { useWindowContext } from '@hooks/useWindowContext';

const Windows = () => {
  const [isProfileOpened, isProjectsOpened, isBlogOpened] = useWindowContext();

  return (
    <>
      <Window icon="p" title="profile" isOpen={isProfileOpened}>
        <Profile />
      </Window>
      <Window icon="pr" title="projects" isOpen={isProjectsOpened}>
        <Projects />
      </Window>
      <Window icon="B" title="blog" isOpen={isBlogOpened}>
        <Blog />
      </Window>
    </>
  );
};

export default Windows;
