import React from 'react';
import Blog from './Blog';
import WindowLayout from './Common/WindowLayout';
import Profile from './Profile';
import Projects from './Projects';
import { useWindowContext } from '@hooks/useWindowContext';

const Windows = () => {
  const [isProfileOpened, isProjectsOpened, isBlogOpened] = useWindowContext();

  return (
    <>
      <WindowLayout icon="p" title="profile" isOpen={isProfileOpened}>
        <Profile />
      </WindowLayout>
      <WindowLayout icon="pr" title="projects" isOpen={isProjectsOpened}>
        <Projects />
      </WindowLayout>
      <WindowLayout icon="B" title="blog" isOpen={isBlogOpened}>
        <Blog />
      </WindowLayout>
    </>
  );
};

export default Windows;
