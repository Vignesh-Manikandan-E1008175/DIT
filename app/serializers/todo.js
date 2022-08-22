// import DS from 'ember-data';

// export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
//     attrs: {
//         todos: { embedded: 'always' }
//     },
//     normalizeResponse(store, primaryModelClass, payload, id, requestType) {
//         payload = {
//             todos: payload
//         };
//         return this._super(store, primaryModelClass, payload, id, requestType);
//     }
// });
import FirebaseSerializer from "emberfire/serializers/firebase";

export default FirebaseSerializer.extend({
    attrs: {
        todos: { embedded: "always" },
    },
});