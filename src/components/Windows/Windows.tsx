import React from 'react';
import Blog from './Blog';
import WindowLayout from './Common/WindowLayout';
import Profile from './Profile';
import Projects from './Projects';
import { useWindowContext } from '@hooks/useWindowContext';

const Windows = () => {
  const [
    isProfileShowing,
    isProjectsShowing,
    isBlogShowing,
    isProfileOpened,
    isProjectsOpened,
    isBlogOpened,
  ] = useWindowContext();

  return (
    <>
      {isProfileOpened && (
        <WindowLayout icon="p" title="profile" isShowing={isProfileShowing}>
          <Profile />
        </WindowLayout>
      )}
      {isProjectsOpened && (
        <WindowLayout icon="pr" title="projects" isShowing={isProjectsShowing}>
          <Projects />
        </WindowLayout>
      )}
      {isBlogOpened && (
        <WindowLayout icon="B" title="blog" isShowing={isBlogShowing}>
          <Blog />
        </WindowLayout>
      )}
    </>
  );
};

export default Windows;
