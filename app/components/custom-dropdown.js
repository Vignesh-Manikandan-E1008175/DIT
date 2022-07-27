import Ember from 'ember';

export default Ember.Component.extend({
    isDropDownEnabled: false,
    toggleDropDown: function (value) {
        Ember.set(this, 'isDropDownEnabled', value);
    },
    click() {
        this.toggleDropDown(!this.isDropDownEnabled);
    }
});
