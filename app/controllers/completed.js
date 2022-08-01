import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
    todos: computed.alias('model'),
    completedTodos: Ember.computed('todos.[]', function() {
        return this.store.peekAll('todo').filter(function(todo) {
            return todo.get('completed') === true;
        });
    })
});