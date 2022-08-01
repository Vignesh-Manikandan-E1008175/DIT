import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
    userId: attr('number'),
    title: attr(),
    completed: attr('boolean', { defaultValue: false }),
    createdAt: attr('date', {
        defaultValue: function() {
            return new Date();
        }
    })
});
