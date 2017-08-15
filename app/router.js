import Ember from 'ember';
import config from './config/environment';
import RSVP from 'rsvp';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
  // adding a "model" function here does nothing
  // wonder why?
});
// This tells the main ember router which routes to handle
// for example
// this.route('about') says
// go to app/routes/about.js for routing '/about'
// in addition, '/' is always routed to app/routes/index.js
// further questions :
// - what if i want a path in my app as '/index'?
Router.map(function() {
  console.log('entered router.map of main router');
  this.route('about');
  this.route('contact');
  this.route('rentals');
  console.log('exited router.map of main router');
});

export default Router;
