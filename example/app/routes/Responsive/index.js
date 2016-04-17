export default {
  path: 'responsive',
  getComponent(location, callback) {
    require.ensure([], require => {
      callback(null, require('components/pages/Responsive'));
    }, 'page-responsive');
  },
  getChildRoutes(location, callback) {
    require.ensure([], () => {
      callback(null, []);
    }, 'page-responsive');
  }
};
