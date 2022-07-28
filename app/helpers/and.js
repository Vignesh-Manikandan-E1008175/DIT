import Ember from 'ember';

export function and(params) {
  let paramsLen = params.length;
  let isTruthy = true;
  for (let i = 0; i < paramsLen; i++) {
    isTruthy = isTruthy && params[i];
  }
  return isTruthy;
}

export default Ember.Helper.helper(and);
