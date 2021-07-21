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
