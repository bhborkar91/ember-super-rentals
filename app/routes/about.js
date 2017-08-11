import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    console.log('entered beforeModel of route:about');
    console.log('exited beforeModel of route:about');
  }
});
