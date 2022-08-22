import Ember from 'ember';

const {
    Route,
} = Ember;

export default Route.extend({
    userData: JSON.parse(window.sessionStorage.getItem('userData')),
    model() {
        return this.store.query('todo', { orderBy: 'uid', equalTo: this.get('userData').userId })
    }
});
