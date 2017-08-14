import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];
// from what i understood, a helper v/s a component
// components are stateful objects with templates and all
// helpers are just a sort of transformation of one data to another
export function rentalPropertyType([propertyType]) {
  if (communityPropertyTypes.includes(propertyType)) {
    return 'Community';
  }

  return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
