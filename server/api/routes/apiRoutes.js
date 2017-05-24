'use strict';

const coceMembersController = require('../controllers/members/coceController');
const benchMembersController = require('../controllers/members/benchController');

module.exports = function(app) {

  // ###############################
  // ####   ROUTE DEFINITIONS   ####
  // ###############################

  // COCE Members
  app.route('/api/coce/')
    .get(coceMembersController.fetch_all)
    .post();

  app.route('/api/coce/:user_id')
    .get()
    .put()
    .delete();

    // Bench Members
   app.route('/api/bench/')
    .get(benchMembersController.fetch_all)
    .post();

    // Opportunities
    app.route('/api/opp/')
      .get()
      .post()

    app.route('/api/opp/:opp_id')
      .delete();

 };
