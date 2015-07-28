import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('post', function() {
    this.route('new');
    this.route('edit', {path: ':slug/edit'});
    this.route('show', {path: ':parent/*slug'}, function() {
      this.route('asd');
    });
  });
  this.route('comment');
});

export default Router;
