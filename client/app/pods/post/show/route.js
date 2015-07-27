import Ember from 'ember';

export default Ember.Route.extend({
	paramCon: '',
	commentCon: '',
	model: function(param){
		// this.set('paramCon',this.store.find('post',  param.id);
		/*return this.store.find('post', param.slug);*/
		//return this.store.find('post', {slug:param.slug});
		return this.store.findQuery('post', {slug:param.slug});
	},
	setupController: function(controller, model) {
    controller.set('model', model);
  },
	/*serialize: function(model) {
		var par;
			if(model.get('parent'))
			{
				par = model.get('parent');
			}
			else
			{
				par = '';
	    }
	    console.log(par);
      return { 
      	slug: model.get('slug'),
      	// parent: par 
      };
    },*/
	actions: {
		saveComment: function(param){
			var parcon = this.get('paramCon');
			var con = this.store.createRecord('comment', {
				commentContent: param,
				post: parcon
			});

			con.save().then(function(){
				console.log('success');
			}, function(){
				alert('failed');
			});
		}
	}
});
