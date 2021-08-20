import React, { useEffect } from 'react';
import { graphql } from 'gatsby';

import '../styles/code.scss';
import Head from '@components/Head';
import { PostTitle } from '@components/Post/PostTitle';
import { PostDate } from '@components/Post/PostDate';
import { PostContainer } from '@components/Post/PostContainer';
import { PostNavigator } from '@components/Post/PostNavigator';
import Layout from '@components/Layout';
import * as ScrollManager from '../utils/scroll';
import PostWrapper from '@components/Post/PostWrapper';

export default ({ data, pageContext, location }) => {
  useEffect(() => {
    ScrollManager.init();
    return () => ScrollManager.destroy();
  }, []);

  const post = data.markdownRemark;
  // const metaData = data.site.siteMetadata;
  // const { title, comment, siteUrl, author, sponsor } = metaData;
  const { title: postTitle, date } = post.frontmatter;
  console.log(data);
  console.log(pageContext);
  console.log(post);

  return (
    <Layout>
      <PostWrapper title={postTitle}>
        <Head title={postTitle} description={post.excerpt} />
        <PostTitle title={postTitle} />
        <PostDate date={date} />
        <PostContainer html={post.html} />
        <PostNavigator pageContext={pageContext} />
      </PostWrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 280)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
