import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // QUESTION : what does this do?
  namespace: 'api'
});
