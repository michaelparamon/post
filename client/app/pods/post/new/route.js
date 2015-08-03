import Ember from 'ember';
//import rollback from '../../../mixins/rollback';

export default Ember.Route.extend({
	model: function(){
		return this.store.find('post');
	},
	/*deactivate: function(){
        var model = this.currentModel;
        var relatedModel, relatedModels;
        model.eachRelationship(function (key, relationship) {
            if (relationship.kind === 'hasMany') {
                relatedModels = model.get(key);
                if (relatedModels) {
                    relatedModels.invoke('rollback');
                }
            }
            else {
                relatedModel = model.get(key);
                if (relatedModel) {
                    relatedModel.invoke('rollback');
                }
            }
        });
        model.rollback();          
    },*/
	actions: {
		newRecord: function(param){
			if(param.parent)
			{
				param.parent = param.parent + '/';
			}
			else
			{
				param.parent = '';
			}
			var post = this.store.createRecord('post',{
				postTitle: param.postTitle,
				slug: param.parent + param.slug,
				parent: param.parent,
				postContent: param.postContent
			});

			var self = this; //supaya dia tau this nya yg disini

			this.set('model.postTitle', '');
			this.set('model.slug', '');
			this.set('model.parent', '');
			this.set('model.postContent', '');

			post.save().then(function(){
				alert('success');
				self.transitionTo('post'); //kalo langsung pake this, dia ga tau this nunjuk siapa
			}, function(){
				alert('failed');
			});
		}
	}
});
