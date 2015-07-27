import DS from 'ember-data';

export default DS.Model.extend({
  postTitle: DS.attr('string'),
  postContent: DS.attr('string'),
  slug    : DS.attr('string'),
  parent  : DS.attr('string', { defaultValue: ''}),
  navLabel: DS.attr('string'),
  layout  : DS.attr('string', { defaultValue: 'standard'}),
  excerpt : DS.attr('string'),
  order   : DS.attr('number'),
  comments: DS.hasMany('comment', {async: true})
});
