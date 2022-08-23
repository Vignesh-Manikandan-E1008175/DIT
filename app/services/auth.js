import Ember from 'ember';

const { inject } = Ember;

export default Ember.Service.extend({
    session: inject.service(),
    store: inject.service(),
    userData: JSON.parse(window.sessionStorage.getItem('userData')),
    init() {
        this._super(...arguments);
        this.get('session').set('isAuthenticated', false);
    },
    signIn: function(provider, callback) {
        let store = this.get('store');
        this.get('session').open('firebase', { provider: provider}).then(function(data) {
            // set user data in sessionStorage
            let currUser = {
                userName: data.currentUser.displayName,
                userId: data.uid,
                provider: data.provider
            };
            window.sessionStorage.setItem('userData', JSON.stringify(currUser));
            console.log(window.sessionStorage.getItem('userData'));

            // check if user is present in store, else create one
            store.findRecord('user', currUser.userId).then(function (user) {
                console.debug(user.get('userName'), user.get('id'));
            }).catch(function(error) {
                console.debug(error);
                let newUser = store.createRecord('user', {
                    userName: currUser.userName,
                    id: currUser.userId
                });
                newUser.save();
            });
        }).finally(function() {
            callback();
        });
    },
    signOut: function() {
        // cleanup data here
        // window.sessionStorage.setItem('userData', null);
        this.get('session').close();
    }
});
