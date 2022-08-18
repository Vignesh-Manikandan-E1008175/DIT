import Ember from 'ember';

export default Ember.Component.extend({
    click(e) {
        if (e.target.children.length > 0 && e.target.children[0].tagName === 'A') {
            e.target.children[0].click();
        }
    },
    mouseEnter(e) {
        if (e.target.classList.contains("default-light-button")) {
            e.target.classList.remove("default-light-button");
            e.target.classList.add("hovered-light-button");
        }
    },
    mouseLeave(e) {
        if (e.target.classList.contains("hovered-light-button")) {
            e.target.classList.remove("hovered-light-button");
            e.target.classList.add("default-light-button");
        }
    },
    actions: {
        login: function(provider) {
            this.sendAction('login', provider);
        },
        logout: function() {
            this.sendAction('logout');
        } 
    }
});
