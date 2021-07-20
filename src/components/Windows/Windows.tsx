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
      <WindowLayout
        icon="p"
        title="profile"
        isOpened={isProfileOpened}
        isShowing={isProfileShowing}
      >
        <Profile />
      </WindowLayout>
      <WindowLayout
        icon="pr"
        title="projects"
        isOpened={isProjectsOpened}
        isShowing={isProjectsShowing}
      >
        <Projects />
      </WindowLayout>
      <WindowLayout icon="B" title="blog" isOpened={isBlogOpened} isShowing={isBlogShowing}>
        <Blog />
      </WindowLayout>
    </>
  );
};

export default Windows;
