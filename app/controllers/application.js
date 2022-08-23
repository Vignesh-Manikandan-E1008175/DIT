import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
    users: computed.alias('model.users'),
    todos: computed.alias('model.todos'),
    init() {
        this._super(...arguments);
    },
    actions: {
        login: function(provider) {
            this.get('target').send('signIn', provider);
        },
        logout: function() {
            this.get('target').send('signOut');
        }
    }
});