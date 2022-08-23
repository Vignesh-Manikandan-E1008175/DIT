import Ember from 'ember';

const {
    Route,
    inject
} = Ember;

export default Route.extend({
    auth: inject.service(),
    session: inject.service(),
    beforeModel() {
        return this.get("session").fetch().catch(function() {});
    },
    model() {
        if (this.get('session').get('isAuthenticated')) {
            this.transitionTo('/all');
        } else {
            this.transitionTo('/');
        }
    },
    actions: {
        signIn: function(provider) {
            let self = this;
            this.get('auth').signIn(provider, function() {
                self.transitionTo('all');
                location.reload();
            });
        },
        signOut: function() {
            this.get('auth').signOut();
            this.transitionTo('/');
        }
    }
});