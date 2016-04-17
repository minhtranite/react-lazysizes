export default {
  path: 'retina',
  getComponent(location, callback) {
    require.ensure([], require => {
      callback(null, require('components/pages/Retina'));
    }, 'page-retina');
  },
  getChildRoutes(location, callback) {
    require.ensure([], () => {
      callback(null, []);
    }, 'page-retina');
  }
};
