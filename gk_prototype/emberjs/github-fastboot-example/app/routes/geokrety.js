import Ember from 'ember';
import Route from '@ember/routing/route';
import fetch from 'ember-fetch/ajax';

const {Logger}= Ember;

export default Route.extend({

	model() {
    // requirement: ember serve --proxy https://private-1b51bc-geokretyapimocks.apiary-mock.com/
    var urlInfo = "https://geokretyapimocks.docs.apiary.io :: /v1/geokrety-type";
    Logger.info('fetch geokrety from ' + urlInfo);
    var gklist = fetch('/v1/geokrety-type')
                        .then(function(response) {
                                // Logger.info('response', response);
                                return response;
                             })
                        ;
    return gklist;
  }
});

