import Ember from 'ember';

export default Ember.Route.extend({
	model: function(param){
		return this.store.findQuery('post', {slug:param.slug}).then(model => model.content[0]);
	},
	serialize: function(model) {
      return { 
      	slug: model.get('slug') 
      };
    },
	actions: {
		updateRecord: function(param){
			var self = this;
			param.save().then(function(){
				self.transitionTo('post');
			}, function(){
				alert('failed');
			});
		}
	}
});
