import Ember from 'ember';

const { RSVP, Route, inject } = Ember;

export default Route.extend({
    userData: JSON.parse(window.sessionStorage.getItem('userData')),
    model() {
        return RSVP.hash({
            users: this.store.query('user', { equalTo: this.get('userData').userId }),
            todos: this.store.query('todo', { orderBy: 'uid', equalTo: this.get('userData').userId })
        });
    },
    actions: {
        createNewTask: function(data) {
            let store = this.store;
            this.setProperties({
                title: ''
            });
            store.findRecord('user', this.get('userData').userId).then(function(user) {
                let newTodo = store.createRecord('todo', {
                    title: data.title,
                    userId: user, 
                    uid: user.get('id'),
                    completed: false,
                    createdAt: new Date()
                });
                user.get("todos").addObject(newTodo);
                newTodo.save();
                user.save();
            });
        },
        cancelNewTodo: function(todo) {
            console.log("cancelling todo creation", todo);
        },
        deleteTask: function (id) {
            console.log("deleting from todo component", id);
        }
    }
});
