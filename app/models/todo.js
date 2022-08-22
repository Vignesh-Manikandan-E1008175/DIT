import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
    userId: belongsTo('user'),
    uid: attr(),
    title: attr(),
    completed: attr('boolean', { defaultValue: false }),
    createdAt: attr('date', {
        defaultValue: function() {
            return new Date();
        }
    })
});
