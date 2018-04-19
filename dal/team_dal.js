var mysql = require('mysql');
var db = require('./db_connection');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback){
    var query = 'CALL team_getall()';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback){
    var query = 'INSERT INTO team (city, team_name, league, division) VALUES (?, ?, ?, ?)';

    var queryData = [params.city, params.team_name, params.league, params.division];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};