module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@context': 'src/context',
          '@pages': 'src/pages',
          '@types': 'src/types',
          '@posts': 'content/posts',
        },
        extentions: ['ts', 'tsx'],
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-typescript',
  ],
};
