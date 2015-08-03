import Ember from 'ember';
//import rollback from '../../../mixins/rollback';

export default Ember.Route.extend({
	paramCon: '',
	commentCon: '',
	model: function(param){
		//this.set('paramCon', this.store.findQuery('post', {slug:param.slug}));
		/*return this.store.find('post', param.slug);*/
		//return this.store.find('post', {slug:param.slug});
		//console.log(param.id);
		return this.store.findQuery('post', {slug:param.slug}).then(model => model.content[0]); //sama kyk then(function(model){ return model.content[0];})
		// return this.store.find('post', param.slug);
	},
	/*
	setupController: function(controller, model) {
    controller.set('model', model);
  },*/
  	afterModel: function(model){
  		this.set('paramCon', model.id);
	    console.log(model.id);
  	},
	serialize: function(model) {
		/*var par;
			if(model.get('parent'))
			{
				par = model.get('parent');
			}
			else
			{
				par = '';
	    }*/
      	return { 
      		slug: model.get('slug')
      		/*parent: par*/ 
      	};
    },
    deactivate: function() {
    	/*var a = this.get('model.commentCon');
    	console.log(a);
    	a.rollback(); */
    },
	actions: {
		saveComment: function(param){
			var self = this;
			this.store.find('post', this.get('paramCon')).then(function(modelcon){
				var con = modelcon.store.createRecord('comment', {
					commentContent: param,
					post: modelcon
				});

				self.set('commentCon', '');

				con.save().then(function(){
					console.log('success');
					self.transitionTo('post');
					//self.refresh().then(function(){console.log('refresh');});
				}, function(){
					console.log('fail to comment');
				});
			});		
			
		}
	}
});
