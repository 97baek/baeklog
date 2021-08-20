const path = require('path');
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@context': path.resolve(__dirname, 'src/context'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@typings': path.resolve(__dirname, 'src/typings'),
        '@lib': path.resolve(__dirname, 'src/lib'),
        '@static': path.resolve(__dirname, 'static'),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { data: projects } = await graphql(`
    query Projects {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/projects/" } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  projects.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/project-details.tsx'),
      context: { slug: node.frontmatter.slug },
    });
  });

  const { data: postsData } = await graphql(`
    query Posts {
      allMarkdownRemark(
        filter: { frontmatter: { category: { ne: "null" }, draft: { eq: false } } }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              category
            }
          }
          next {
            frontmatter {
              slug
              title
              category
            }
          }
          previous {
            frontmatter {
              slug
              title
              category
            }
          }
        }
      }
    }
  `);

  const posts = postsData.allMarkdownRemark.edges;
  posts.forEach((post) => {
    actions.createPage({
      path: `/blog/${post.node.frontmatter.slug}`,
      component: path.resolve('./src/templates/blog-post.tsx'),
      context: {
        slug: post.node.frontmatter.slug,
        previous: post.next,
        next: post.previous,
      },
    });
  });
};
