import Ember from 'ember';

const {
    inject,
    computed: {
        alias
    }
} = Ember;

export default Ember.Component.extend({
    store: inject.service(),
    inEditMode: false, // edit mode flag
    isDone: alias('todo.completed'), // checkbox state
    editModeTitle: '', // task input state
    init() {
        this._super(...arguments);
        this.set('showList', true);
    },
    actions: {
        initiateEditMode: function(title) {
            this.set('inEditMode', true);
            this.set('editModeTitle', title);
        },
        confirmEdit: function (todo) {
            let origTodo = null;
            let store = this.get('store');
            origTodo = store.peekRecord('todo', todo.id);
            if (origTodo == null) {
                store.findRecord('todo', todo.id).then(function(origTask) {
                    origTodo = origTask;
                });
            }
            origTodo.set('completed', this.get('isDone'));
            origTodo.set('title', this.get('editModeTitle'));
            origTodo.save();
            this.set('inEditMode', false);
        },
        cancelEdit: function(todo) {
            if (todo.get('hasDirtyAttributes')) {
                todo.rollbackAttributes();
            }
            this.set('inEditMode', false);
        },
        toggleTodo: function(todo) { 
            todo.toggleProperty('completed');
            if (todo.get('hasDirtyAttributes')) {
                todo.save();
            }
        }, 
        deleteTodo: function(id) {
            let store = this.get('store');
            store.find('todo', id).then(function(taskToDelete) {
                taskToDelete.destroyRecord().then(function(todo) {
                    console.log("deleted record", todo.id);
                });
            });
        }
    }
});
