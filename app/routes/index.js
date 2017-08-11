import Ember from 'ember';

export default Ember.Route.extend({
  // beforeModel is the first thing to be called
  // here we tell it to change the path (the route, referred to as 'this')
  // firebug shows this to be a url rewrite in the client
  beforeModel: function() {
    console.log('entered beforeModel of route:index');
    this.replaceWith('rentals');
    // firebug prints the line below
    // so, it completes this method before rewriting the url
    console.log('exited beforeModel of route:index');
  }
});
