import React from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { rhythm } from '../../utils/typography';

const PostWrapper = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  return (
    <>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default PostWrapper;
