import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		postDelete: function(param){
			this.sendAction('triggerDelete', param);
		}
	}
});
