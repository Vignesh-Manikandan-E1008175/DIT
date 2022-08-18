import Ember from 'ember';

const { inject } = Ember;

export default Ember.Service.extend({
    session: inject.service(),
    init() {
        this._super(...arguments);
        this.get('session').set('isAuthenticated', false);
    },
    signIn: function(provider) {
        this.get('session').open('firebase', { provider: provider}).then(function(data) {
            console.log(data);
            console.log('logged in');
        });
    },
    signOut: function() {
        this.get('session').close();
        console.log('logged out');
    }
});
