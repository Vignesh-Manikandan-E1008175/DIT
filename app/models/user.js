import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
    userName: attr('string'),
    todos: hasMany('todo')
});
