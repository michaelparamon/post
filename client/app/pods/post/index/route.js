import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.find('post');
	},
	actions: {
		deletePost: function(param){
			console.log('delete');
			this.store.find('post', param).then(function(postCon){
				postCon.destroyRecord();
				alert('Post has been deleted');
			}, function(){
				alert('Failed to delete');
			});
		}
	}
});
