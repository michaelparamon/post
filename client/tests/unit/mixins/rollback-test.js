import Ember from 'ember';
import RollbackMixin from '../../../mixins/rollback';
import { module, test } from 'qunit';

module('Unit | Mixin | rollback');

// Replace this with your real tests.
test('it works', function(assert) {
  var RollbackObject = Ember.Object.extend(RollbackMixin);
  var subject = RollbackObject.create();
  assert.ok(subject);
});
