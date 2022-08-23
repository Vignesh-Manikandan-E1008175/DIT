import Ember from 'ember';

export default Ember.Component.extend({
    displayName: "John Doe",
    didRender() {
        this._super(...arguments);
        this.set('displayName', JSON.parse(window.sessionStorage.getItem('userData')).userName);
    }
});
