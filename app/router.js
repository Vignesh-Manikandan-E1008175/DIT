import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('not-found', { path: '/*path'});
  this.route('pending');
  this.route('completed');
  this.route('all');
});

export default Router;
