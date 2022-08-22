import Ember from 'ember';

const { inject } = Ember;

export default Ember.Component.extend({
    auth: inject.service(),
    isDropDownEnabled: false,
    toggleDropDown: function (value) {
        Ember.set(this, 'isDropDownEnabled', value);
    },
    click() {
        this.toggleDropDown(!this.isDropDownEnabled);
    },
    actions: {
        logout: function() {
            this.get('auth').signOut();
        }
    }
});
