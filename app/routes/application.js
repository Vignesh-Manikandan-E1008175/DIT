import Ember from 'ember';

const {
    Route
} = Ember;

export default Route.extend({
    model() {
        return this.store.findAll('todo');
    },
    actions: {
        createNewTask: function(data) {
            let newTask = this.store.createRecord('todo', data);
            this.setProperties({
                title: ''
            });
            newTask.save();
        },
        cancelNewTodo: function(todo) {
            console.log("cancelling todo creation", todo);
        },
        deleteTask: function (id) {
            console.log("deleting from todo component", id);
        }
    }
});