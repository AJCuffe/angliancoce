"use strict";

const neo4j = require("neo4j-driver").v1;

// Connect to Neo4j Database.
const driver = neo4j.driver('bolt://hobby-kgjglgkmojekgbkecfdckipl.dbs.graphenedb.com:24786', neo4j.auth.basic('cocealliance', 'b.WY2QIX79Smut.F4myGJ0XU2z2cCEe'));

// If connection fails, alert the server.
driver.onError = function (error) {
  console.log('[DATABASE] Driver instantiation failed!', error);
};

// Set the session.
const session = driver.session();

// ###############################
// ####     CREATE METHODS    ####
// ###############################

// === ADD NEW COCE MEMBER ===
exports.add_member = function(req, res) {
  session
    .run(`CREATE(n:coceMember {
      firstName:{firstNameParam},
      lastName:{lastNameParam}}
    ) RETURN n`, {
      firstNameParam: req.body.firstName,
      lastNameParam: req.body.lastName
    })
    .then(function (result) {
      res.status(200).json({message: `User '${req.body.firstName} ${req.body.lastName}' has successfully been added to the database.`});
      session.close();
      console.log(`[DATABASE] 'Add Member' method completed.`);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// ###############################
// ####      READ METHODS     ####
// ###############################

// === FETCH ALL COCE MEMBERS ===

exports.fetch_all = function(req, res) {
  session
    .run('MATCH(n:coceMember) RETURN n')
    .then(function (result) {
      var coceMembers = [];
      result.records.forEach(function (record) {
        coceMembers.push({
          id: record._fields[0].identity.low,
          firstName: record._fields[0].properties.firstName,
          lastName: record._fields[0].properties.lastName
        });
      });
      res.status(200).json(coceMembers);
      session.close();
      console.log(`[DATABASE] 'Fetch All' method completed; returned ${coceMembers.length} rows.`)
    })
    .catch(function (error) {
      console.log(error);
    });
};

// === FETCH SINGLE COCE MEMBER ===

exports.fetch_single = function(req, res) {
  session
    .run(`MATCH(n:coceMember) WHERE ID(n) = ${req.params.user_id} RETURN n`)
    .then(function (result) {
      var coceMember = [];
      result.records.forEach(function (record) {
        coceMember.push({
          id: record._fields[0].identity.low,
          firstName: record._fields[0].properties.firstName,
          lastName: record._fields[0].properties.lastName
        });
      });

      switch(coceMember.length) {
        case 0:
          res.status(401).json({type: 'Error', message: `User with ID ${req.params.user_id} does not exist.`});
          break;
        default:
          res.status(200).json(coceMember);
          console.log(`[DATABASE] 'Fetch Single' method completed; returned ${coceMember.length} row.`)
      }

      session.close();
    })
    .catch(function (error) {
      res.status(401).send({type: 'Error', message: 'Internal Server Error.'});
    });
};

// ###############################
// ####     UPDATE METHODS    ####
// ###############################

// == UPDATE A COCE MEMBER ==
exports.edit_member = function(req, res) {

  // session
    // .run(`MATCH (n) WHERE ID(n) = ${req.params.user_id} SET ${req.body} RETURN n`)
    // .then(function (result) {
    //   res.json(result);
    //   session.close();
    //   console.log(`[DATABASE] 'Edit Member' method completed.`);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  // console.log(data);
};

// ###############################
// ####     DELETE METHODS    ####
// ###############################

// === DELETE COCE MEMBER ===
exports.remove_member_by_id = function(req, res) {
  session
    .run(`MATCH (n:coceMember) WHERE ID(n) = ${req.params.user_id} DELETE n`)
    .then(function(result) {
      res.status(200).json({message: 'User has successfully been deleted.'});
      session.close();
      console.log('[DATABASE] User has been deleted from the database.');
    })
    .catch(function(error) {
      console.log(error);
    });
};
