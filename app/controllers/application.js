import Ember from 'ember';

const { Controller, computed, $ } = Ember;

export default Controller.extend({
    todos: computed.alias('model'),
    // showTodoList: false,
    inCreateMode: false,
    init() {
        this._super(...arguments);
    },
    titleObserver: function() {
        if (this.get('title').length > 0) {
            $('#createTodoTextfield').css("outline", "none");
            $('#createTodoTextfield-help-text').css("display", "none");
        }
    }.observes('title'),
    actions: {
        initiateTodoCreation: function () {
            this.set('inCreateMode', true);
        },
        createTodo: function () {
            let title = this.get('title');
            if (title.length > 0) {
                this.send('createNewTask', { userId: 1, title: title });
                // this.set('showTodoList', true);
                this.set('inCreateMode', false);
                this.set('title', '');
            } else {
                $('#createTodoTextfield').css("outline", "0.1em solid #D0352C");
                $('#createTodoTextfield-help-text').css("display", "block");
            }
        },
        cancelCreateTodo: function() {
            this.set('inCreateMode', false);
            this.set('title', '');
            this.send('cancelNewTodo', {});
        }
    }
});