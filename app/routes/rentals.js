import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    console.log('entered beforeModel of route:rentals');
    console.log('exited beforeModel of route:rentals');
  },

  // this is a hook
  // it is expected to be called multiple times by ember when rendering the page
  model: function() {
    console.log('entered model of route:rentals');
    // TODO : any alternative to var here? angular had objects and all
    // how does this work
    // it uses the adapter somehow for the /api
    // but what rest call is this expected to make, without mirage
    // is there some structure to it?
    var retval = this.get('store').findAll('rental');
    console.log('exited model of route:rentals');
    return retval;
  }
});
