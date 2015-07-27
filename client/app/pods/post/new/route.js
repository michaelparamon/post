import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.find('post');
	},
	actions: {
		newRecord: function(param){
			var post = this.store.createRecord('post',{
				postTitle: param.postTitle,
				slug: param.slug,
				parent: param.parent,
				postContent: param.postContent
			});

			var self = this; //supaya dia tau this nya yg disini

			post.save().then(function(){
				alert('success');
				self.transitionTo('post'); //kalo langsung pake this, dia ga tau this nunjuk siapa
			}, function(){
				alert('failed');
			});
		}
	}
});
