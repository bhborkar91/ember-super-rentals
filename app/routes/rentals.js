import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    console.log('entered beforeModel of route:rentals');
    console.log('exited beforeModel of route:rentals');
  }
});
