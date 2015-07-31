import Ember from 'ember';

export default Ember.Route.extend({
	paramCon: '',
	commentCon: '',
	model: function(param){
		this.set('paramCon', param);
		//this.set('paramCon', this.store.findQuery('post', {slug:param.slug}));
		/*return this.store.find('post', param.slug);*/
		//return this.store.find('post', {slug:param.slug});
		return this.store.findQuery('post', {slug:param.slug}).then(model => model.content[0]); //sama kyk then(function(model){ return model.content[0];})
	},
	/*
	setupController: function(controller, model) {
    controller.set('model', model);
  },*/
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
      	slug: model.get('slug'),
      	/*parent: par*/ 
      };
    },
	actions: {
		saveComment: function(param){
			this.store.find('post', this.get('paramCon')).then(function(modelcon){
				var con = modelcon.store.createRecord('comment', {
					commentContent: param,
					post: modelcon
				});

				//var self = this;

				con.save().then(function(){
					console.log('success');
					// self.transitionTo('post');
				}, function(){
					console.log('fail to comment');
				});
			});		
			
		}
	}
});
