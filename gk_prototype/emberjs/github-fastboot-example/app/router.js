import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('gitlabuser');
  this.route('geokrets');
  this.route('contact');
  this.route('about');
});

export default Router;