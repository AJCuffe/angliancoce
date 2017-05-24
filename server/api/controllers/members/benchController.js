'use strict';

const neo4j = require('neo4j-driver').v1;

// Connect to Neo4j Database.
const driver = neo4j.driver('bolt://hobby-kgjglgkmojekgbkecfdckipl.dbs.graphenedb.com:24786', neo4j.auth.basic('cocealliance', 'b.WY2QIX79Smut.F4myGJ0XU2z2cCEe'));

// If connection fails, alert the server.
driver.onError = function (error) {
  console.log('[DATABASE] Driver instantiation failed!', error);
};

// Set the session.
const session = driver.session();


// ###############################
// ####      READ METHODS     ####
// ###############################

// === FETCH ALL COCE MEMBERS ===

exports.fetch_all = function(req, res) {
  session
    .run('MATCH(n:benchMember) RETURN n')
    .then(function (result) {
      var benchMembers = [];
      result.records.forEach(function (record) {
        benchMembers.push({
          id: record._fields[0].identity.low,
          firstName: record._fields[0].properties.firstName,
          lastName: record._fields[0].properties.lastName
        });
      });
      res.status(200).json(benchMembers);
      session.close();
      console.log(`[DATABASE] 'Fetch All' method completed; returned ${benchMembers.length} rows.`)
    })
    .catch(function (error) {
      console.log(error);
    });
};
