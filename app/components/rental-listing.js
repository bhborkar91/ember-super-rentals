import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  actions: {
    toggleImageSize: function() {
      // setting isWide as you would a variable, does not work
      // toggleProperty is needed here
      this.toggleProperty('isWide');
    }
  }
});
